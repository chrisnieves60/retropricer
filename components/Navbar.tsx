import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <nav className="text-white w-full flex justify-center h-32 bg-navBlue">
      <div className="w-full max-w-6xl flex items-center justify-between p-3">
        <div className="flex gap-x-4">
          <Image alt="website logo" width={40} height={40} src={logo}></Image>
          <Link href="/">Home</Link>
          <Link href="/consoles">Consoles</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <div className="flex gap-x-4 mt-5"></div>
          <div className="mb-3">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <SearchBar />
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
