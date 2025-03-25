"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import n64 from "@/public/n64.png";
import xbox360 from "@/public/xbox360.png";
import xbox from "@/public/xbox.png";
import ps1 from "@/public/ps1.png";
import ps2 from "@/public/ps2.png";
import ps3 from "@/public/ps3.png";
import gba from "@/public/gba.png";
import segadreamcast from "@/public/segadreamcast.png";
import ds from "@/public/ds.png";
import wii from "@/public/wii.png";
import { DataProvider, useData } from "../../contexts/DataContext";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ConsoleCard from "@/components/ConsoleCard";
export default function page() {
  const average = useData();
  const [releaseDate, setReleaseDate] = useState<{ [key: string]: string }>({});
  const [consoleData, setConsoleData] = useState<{
    [key: string]: [
      string,
      StaticImageData,
      string,
      string | undefined,
      string,
    ];
  }>({});
  // const consoles = [
  //   "Nintendo 64",
  //   "Playstation 1",
  //   "Playstation 2",
  //   "Playstation 3",
  //   "Sega Dreamcast",
  //   "Xbox 360",
  //   "Xbox",
  //   "Wii",
  //   "Gameboy Advance",
  //   "Nintendo DS",
  // ];
  const fetchReleaseDate = async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase.from("consoles").select();

    if (error) {
      console.error("Error fetching consoles:", error);
      return;
    }

    // Create an object that maps console name to release date
    const releaseDateObj = data.reduce((acc, console) => {
      acc[console.name] = console.releaseDate;
      return acc;
    }, {});

    setReleaseDate(releaseDateObj);
  };
  useEffect(() => {
    fetchReleaseDate();
    console.log(releaseDate);
  }, []);

  useEffect(() => {
    if (releaseDate && average) {
      setConsoleData({
        "Nintendo 64": [
          "Nintendo 64",
          n64,
          releaseDate["Nintendo 64"],
          average.scraped_data,
          "n64",
        ],
        "Playstation 1": [
          "Playstation 1",
          ps1,
          releaseDate["PlayStation 1"],
          average.ps1Scraper,
          "ps1",
        ],
        "Gameboy Advance": [
          "Gameboy Advance",
          gba,
          releaseDate["Gameboy Advance"],
          average.gbaScraper,
          "gba",
        ],
        "Sega Dreamcast": [
          "Sega Dreamcast",
          segadreamcast,
          releaseDate["Sega Dreamcast"],
          average.segaScraper,
          "segadreamcast",
        ],

        Xbox: ["Xbox", xbox, releaseDate["Xbox"], average.xboxScraper, "xbox"],
      });
    }
  }, [releaseDate, average]);

  return (
    <div className="flex flex-col h-screen w-full text-white ">
      <Navbar />
      {/* First bit of content */}
      <div className="flex bg-navBlue w-full py-10 ">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-center font-semibold">
            Here are some consoles you can start price tracking 📈
          </div>
        </div>
      </div>
      {/* Second bit of content - Console Cards */}
      <div className="flex flex-col flex-grow w-full bg-offWhite text-black p-10">
        <div className="container mx-auto">
          {/* Each Console Card */}
          {Object.entries(consoleData).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(consoleData).map(
                ([consoleName, [name, image, releaseDate, data, link]]) => (
                  <ConsoleCard
                    key={consoleName}
                    consoleName={name}
                    image={image}
                    releaseDate={releaseDate}
                    data={data}
                    link={link}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md animate-pulse"
                >
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Repeat for each console */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
