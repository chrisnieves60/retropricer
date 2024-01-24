import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
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

export default function page() {
  return (
    <>
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Each Console Card */}
              <Link
                href="/consoles/n64"
                className="group transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4 flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden">
                  {" "}
                  {/* Set a fixed height container for the image */}
                  <Image
                    src={n64}
                    alt="Product Image"
                    width={200}
                    height={200}
                    layout="responsive"
                    className="transition duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                  {" "}
                  {/* Ensure the text content is pushed to the bottom */}
                  <div className="font-bold text-xl mb-2">Nintendo 64</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>

              <Link
                href="/consoles/xbox"
                className="group transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4 flex flex-col"
              >
                <div className="h-48 w-full">
                  {" "}
                  {/* Set a fixed height container for the image */}
                  <Image
                    src={xbox}
                    alt="Product Image"
                    width={200}
                    height={200}
                    layout="responsive"
                    className="transition duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                  {" "}
                  {/* Ensure the text content is pushed to the bottom */}
                  <div className="font-bold text-xl mb-2">Xbox</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/xbox360"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={xbox360}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Xbox 360</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/ps1"
                className="group transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4 flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden">
                  {" "}
                  {/* Set a fixed height container for the image */}
                  <Image
                    src={ps1}
                    alt="Product Image"
                    width={200}
                    height={200}
                    layout="responsive"
                    className="transition duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                  {" "}
                  {/* Ensure the text content is pushed to the bottom */}
                  <div className="font-bold text-xl mb-2">Playstation 1</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/ps2"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={ps2}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Playstation 2</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/ds"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={ds}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Nintendo ds</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/ps3"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={ps3}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Playstation 3</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/segadreamcast"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={segadreamcast}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Sega Dreamcast</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/wii"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={wii}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Nintendo Wii</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              <Link
                href="/consoles/gba"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
              >
                <Image
                  src={gba}
                  alt="Product Image"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">GameBoy Advance</div>
                  <p className="text-gray-700 text-base">
                    Released:{" "}
                    <span className="font-semibold">Release Date</span>
                  </p>
                  <p className="text-gray-700 text-base">
                    Avg. Price:{" "}
                    <span className="font-semibold">$Current Market Price</span>
                  </p>
                </div>
              </Link>
              {/* Repeat for each console */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
