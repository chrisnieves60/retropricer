import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import nintendoLogo from "@/public/nintendo.png"; // Adjust the path if necessary
import xboxLogo from "@/public/xboxlogo.png"; // Adjust the path if necessary
import psLogo from "@/public/pslogo.png"; // Adjust the path if necessary
import segaLogo from "@/public/segalogo.png"; // Adjust the path if necessary
const Notes = ({ consoleIndex }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      const { data, error } = await supabase.from("consoles").select();
      if (error) {
        console.error("Error fetching notes:", error);
        return;
      }

      setNotes(data);
    };

    fetchNotes();
  }, []);

  switch (consoleIndex) {
    case "1":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 1)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 1)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={xboxLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 1)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 1)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "2":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 2)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 2)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={psLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 2)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 2)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "3":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 3)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 3)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={psLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 3)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 3)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "4":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 4)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 4)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={nintendoLogo} // Assuming the s is imported
                  alt="Product Image"
                  width={60}
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 4)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 4)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );

    case "5":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 5)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 5)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={xboxLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 5)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 5)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "6":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 6)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 6)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={nintendoLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 6)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 6)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "7":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 7)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 7)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={nintendoLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 7)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 7)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "8":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 8)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 8)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={psLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 8)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 8)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "9":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 9)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 9)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={nintendoLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 9)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 9)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );
    case "10":
      return (
        <div>
          {notes && notes.length > 0 ? (
            <div className="flex flex-col items-start text-gray-900 ">
              <h2 className="text-3xl font-bold">
                {notes.find((note) => note.id == 10)?.name}
              </h2>
              <h3 className="text-xl text-gray-700">
                Release Date:{" "}
                <span className="text-gray-600 font-normal">
                  {notes.find((note) => note.id == 10)?.releaseDate}
                </span>
              </h3>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-700 mr-2">Manufacturer:</h3>
                <Image
                  src={segaLogo} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
                  height={20}
                  layout="fixed" // 'fixed' layout for small images like badges
                />
              </div>
              <p className="text-gray-600 text-base pt-4">
                {notes.find((note) => note.id == 10)?.description}
              </p>
              <ul>
                <h4 className="font-semibold pt-4">Notable Games:</h4>
                {notes
                  .find((note) => note.id == 10)
                  ?.notableGames.split(", ")
                  .map((game, index) => (
                    <li className="font-bold" key={index}>
                      {game.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>Loading or no data...</p>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Notes;
