"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const n64 = () => {
  // You'll probably have state for your items and prices
  const [itemName, setItemName] = useState("");
  const [prices, setPrices] = useState({ ebay: "", amazon: "", avg: "" });

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
                  src="/your-image.jpg"
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
              <div>
                <h2 className="text-xl font-medium text-black">Product Name</h2>
                <p className="text-gray-500">
                  You can dynamically update this based on user input or
                  selection.
                </p>
              </div>
            </div>

            {/* Graph Section */}
            <div className="md:col-span-2">
              {/* Dummy graph content */}
              <div className="bg-white rounded-xl shadow-md h-64 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Price Trend Graph
                </h3>
                {/* Placeholder for graph */}
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-500">Graph will go here.</span>
                </div>
              </div>
              {/* Rectangle for additional info */}
              <div className="bg-white rounded-xl shadow-md mt-8 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Additional Information
                </h3>
                {/* Placeholder for additional info */}
                <p className="text-gray-500">
                  Additional details or related information can be displayed
                  here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default n64;
