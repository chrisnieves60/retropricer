"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AWS from "../../../awsConfig";
import "dotenv/config";
import PriceGraph from "@/components/PriceGraph";
import myPic from "@/public/ps2.png";
import { subWeeks, subMonths, subDays, isAfter } from "date-fns";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Notes from "@/components/Notes";
import axios from "axios";

export default function Page() {
  const [versionData, setVersionData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [average, setAverage] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    fetchPrices().then((processedData) => {
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

        const max = processedData.reduce((max, current) => {
          return current.average_price > max ? current.average_price : max;
        }, Number.MIN_VALUE);

        setMax(max);
        setMin(min);
        setAverage(total / processedData.length);
        console.log("data stats set! hopfully this shows only once. ");
      } else {
        setAverage(0); // Or any default value in case versionData is empty
      }
    });
  }, []);

  const s3 = new AWS.S3();

  async function fetchPrices() {
    try {
      // Retrieve the list of object versions
      const versions = await s3
        .listObjectVersions({
          Bucket: "retropricer",
          Prefix: "ps2Scraper.json",
        })
        .promise();

      const dataPromises = versions.Versions.map((version) =>
        s3
          .getObject({
            Bucket: "retropricer",
            Key: "ps2Scraper.json",
            VersionId: version.VersionId,
          })
          .promise(),
      );
      const dataObjects = await Promise.all(dataPromises);
      const processedData = dataObjects.map((data) => {
        const content = JSON.parse(data.Body.toString("utf-8"));
        // Replace 'timestamp' and 'average_price' with the actual property names in your JSON
        const timestamp = content["timestamp "];
        const averagePrice = content.average_price;
        return {
          timestamp,
          average_price: averagePrice,
        };
      });

      // Sort the data by timestamp
      processedData.sort(
        (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
      );
      return processedData;
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
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
                  <Notes consoleIndex={"2"} />
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
              <div className="bg-white rounded-xl shadow-md mt-8 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Used</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lowest
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Highest
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Ebay (Console Only)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {min.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {max.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {average.toFixed(2)}
                        </td>
                      </tr>

                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md mt-8 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Renewed
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Current Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="px-6 py-4 whitespace-nowrap">
                        <td className="px-6 py-4 whitespace-nowrap">
                          Amazon (Renewed)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">129.00</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
