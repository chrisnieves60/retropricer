"use client";
import { useState, ChangeEvent, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const consoles = [
  "Nintendo 64",
  "Playstation 1",
  "Sega Dreamcast",
  "Xbox",
  "Gameboy Advance",
];

const consoleRoutes: { [key: string]: string } = {
  "Nintendo 64": "n64",
  "Playstation 1": "ps1",
  "Playstation 2": "ps2",
  "Playstation 3": "ps3",
  "Sega Dreamcast": "segadreamcast",
  "Xbox 360": "xbox360",
  Xbox: "xbox",
  Wii: "wii",
  "Gameboy Advance": "gba",
  "Nintendo DS": "ds",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleConsoleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsDropdownOpen(false);
    const href = event.currentTarget.href;
    window.location.href = href;
  };

  const filteredConsoles = consoles.filter((console) =>
    console.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="relative font-sans text-base">
      <input
        type="text"
        placeholder="Search consoles..."
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setIsDropdownOpen(true)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 border-t-0 rounded-b-md shadow-md text-black">
          {filteredConsoles.map((console) => (
            <li key={console}>
              <Link
                href={`/consoles/${consoleRoutes[console]}`}
                onClick={handleConsoleClick}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <div className="relative w-8 h-8 mr-2">
                  <Image
                    src={`/${consoleRoutes[console]}.png`}
                    alt={console}
                    width={59}
                    height={59}
                  />
                </div>
                <span>{console}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
