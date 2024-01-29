import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Consoles..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section: "Top Selling Consoles" + carousel */}
            <div className="flex-1 p-4 text-center">
              <h2 className="text-xl font-bold mb-2">Top Selling Consoles</h2>
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
                looking for a good deal, our extensive database ensures you get
                the most competitive pricing available.
              </p>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-2xl bg-gradient-to-r from-green-400 to-teal-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">
                Rare Finds & Auctions
              </h2>
              <p>
                Discover hidden gems and rare collectibles. Dive into our
                curated selection of auctions and sales to find that elusive
                piece you've been searching for. From limited editions to
                discontinued models, find it all here.
              </p>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">
                User-Friendly Interface
              </h2>
              <p>
                Navigate the world of retro gaming with ease. Our intuitive
                platform allows you to search, compare, and track prices
                effortlessly. Plus, set up alerts so you never miss a deal on
                the consoles you love.
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
            Start Tracking Now!
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
