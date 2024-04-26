import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
export default async function Index() {
  return (
    <div className=" w-full min-h-full items-center text-white">
      <Navbar />

      {/*2 sections of content after navbar*/}
      <div className="bg-navBlue w-full px-4 py-10 ">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-start gap-4">
            {/* Left Section: "Helping you get competitive pricing on video game consoles" + search bar */}
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-2">
                Helping you get{" "}
                <strong className="text-red-500">competitive</strong> pricing on
                retro game consoles
              </h2>

              <SearchBar />
            </div>

            {/* Right Section: "Top Selling Consoles" + carousel */}
            <div className="flex-1 p-4 text-center">
              {/* Carousel component */}
            </div>
          </div>
        </div>
      </div>

      {/*offwhite background body*/}
      <div className=" flex flex-col flex-grow w-full bg-offWhite text-black">
        <div className=" flex flex-row justify-center mt-16">
          <div className="flex flex-wrap justify-center gap-6 m-8">
            <div className="max-w-md rounded overflow-hidden shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">
                Comprehensive Price Tracking
              </h2>
              <p>
                Get real-time updates on the latest prices for your favorite
                retro video game consoles. Whether you're a collector or just
                looking for a good deal, ensures you know when to buy/sell
                consoles.
              </p>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-2xl bg-gradient-to-r from-green-400 to-teal-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">
                Email updates on pricing (coming soon)
              </h2>
              <p>
                Create an account with us so that you can receive real-time
                updates when a given console drops below a set price. This can
                allow you to buy a console when it hits a low target price.
              </p>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">
                User-Friendly Interface
              </h2>
              <p>
                With our dynamic price chart, you will be able to check previous
                pricing trends of consoles. Our website has data on console
                pricing trends dating back to January 2024. Average console
                prices are updated every 6 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 mb-5">
          <p className="text-2xl text-gray-800 font-semibold mb-4">
            So, what are you waiting for?
          </p>
          <p className="text-xl mb-6">
            Start tracking your favorite consoles now and never miss a deal!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-lg hover:shadow-xl transition duration-300">
            <Link href="/consoles">Start Tracking Now!</Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
