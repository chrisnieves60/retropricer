"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AWS from "../../../awsConfig";
import "dotenv/config";
import PriceGraph from "@/components/PriceGraph";
import myPic from "@/public/ps1.png";
import { subWeeks, subMonths, subDays, isAfter } from "date-fns";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Notes from "@/components/Notes";
import axios from "axios";
import { useData } from "@/contexts/DataContext";
import AdditionalInfo from "@/components/AdditionalInfo";
import S3Service from "@/app/services/api/fetchS3";
interface PriceData {
  timestamp: string;
  average_price: number;
}
export default function Page() {
  const data = useData();

  // Use the type in your state hooks
  const [versionData, setVersionData] = useState<PriceData[]>([]);
  const [filteredData, setFilteredData] = useState<PriceData[]>([]);
  const [average, setAverage] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  useEffect(() => {
    const s3Service = new S3Service();

    async function fetchAndProcessPrices() {
      try {
        //call api service to fetch s3 buckets and versions sorted
        const processedData = await s3Service.fetchPrices("ps1Scraper.json");

        //set version data
        setVersionData(processedData);
        //calculate avg
        if (processedData.length > 0) {
          const total = processedData
            .map((data) => data.average_price)
            .reduce((acc, price) => acc + price, 0);

          //calculate min
          const min = processedData.reduce((min, current) => {
            return current.average_price < min ? current.average_price : min;
          }, Number.MAX_VALUE);

          //calculate max
          const max = processedData.reduce((max, current) => {
            return current.average_price > max ? current.average_price : max;
          }, Number.MIN_VALUE);

          setMax(max);
          setMin(min);
          setAverage(total / processedData.length);
        } else {
          setAverage(0); // Or any default value in case versionData is empty
        }
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    }
    //call async function
    fetchAndProcessPrices();
  }, []);

  const filterData = (range = "") => {
    const now = new Date();

    switch (range) {
      case "1day":
        setFilteredData(
          versionData.filter((d) =>
            // END: be15d9bcejpp
            isAfter(new Date(d.timestamp), subDays(now, 1)),
          ),
        );

        break;
      case "2days":
        setFilteredData(
          versionData.filter((d) =>
            isAfter(new Date(d.timestamp), subDays(now, 2)),
          ),
        );
        break;
      case "3days":
        setFilteredData(
          versionData.filter((d) =>
            isAfter(new Date(d.timestamp), subDays(now, 3)),
          ),
        );
        break;
      case "1week":
        setFilteredData(
          versionData.filter((d) =>
            isAfter(new Date(d.timestamp), subDays(now, 7)),
          ),
        );
        break;
      case "2weeks":
        setFilteredData(
          versionData.filter((d) =>
            isAfter(new Date(d.timestamp), subDays(now, 14)),
          ),
        );
        break;
      case "1month":
        setFilteredData(
          versionData.filter((d) =>
            isAfter(new Date(d.timestamp), subDays(now, 30)),
          ),
        );
        break;
      case "all":
        setFilteredData([...versionData]);
        break;

      default:
        setFilteredData([...versionData]); //return copy of array of all version data
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-offWhite w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Image Section */}
            <div className="md:col-span-1 bg-white rounded-xl shadow-md p-6 space-y-4">
              <div className="flex-shrink-0">
                {/* Replace with your dynamic image source */}
                <Image
                  src={myPic}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
              <div>
                <p className="text-gray-500">
                  <Notes consoleIndex={8} />
                </p>
              </div>
            </div>

            {/* Graph Section */}
            <div className="md:col-span-2">
              {/* Dummy graph content */}
              <div className="bg-white rounded-xl shadow-md h-68 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ebay Price Trend Graph
                </h3>
                {/* Placeholder for graph */}
                <div className="h-full flex items-center justify-center">
                  {filteredData.length > 0 ? (
                    <PriceGraph data={filteredData} />
                  ) : (
                    <PriceGraph data={versionData} />
                  )}
                </div>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("1day")}
                >
                  1 day
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("2days")}
                >
                  2 day
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("3days")}
                >
                  3 day
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("1week")}
                >
                  1 Week
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("2weeks")}
                >
                  2 Weeks
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("1month")}
                >
                  1 month
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => filterData("all")}
                >
                  All
                </button>
              </div>
              {/* Rectangle for additional info */}
              <AdditionalInfo
                min={min}
                max={max}
                average={average}
                current_average={
                  data && data.ps1Scraper
                    ? parseFloat(data.ps1Scraper).toFixed(2)
                    : null
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
