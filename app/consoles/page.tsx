import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen w-full text-white">
      <Navbar />
      {/* First bit of content */}
      <div className="flex bg-navBlue w-full py-10">
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
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4"
            >
              <img
                className="w-full h-48 object-cover"
                src=""
                alt="Console Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Console Name</div>
                <p className="text-gray-700 text-base">
                  Released: <span className="font-semibold">Release Date</span>
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
  );
}
