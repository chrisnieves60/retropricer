import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import nintendoLogo from "@/public/nintendo.png"; // Adjust the path if necessary
import xboxLogo from "@/public/xboxLogo.png"; // Adjust the path if necessary
import psLogo from "@/public/pslogo.png"; // Adjust the path if necessary
import segaLogo from "@/public/segalogo.png"; // Adjust the path if necessary

type NotesProps = {
  consoleIndex: number; // Use lowercase 'number' for the type
};

interface Note {
  id: number;
  name: string;
  releaseDate: string;
  description: string;
  notableGames: string;
}

const Notes: React.FC<NotesProps> = ({ consoleIndex }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
      const supabaseAnonKey = process.env
        .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
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
    case 1:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 2:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 3:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 4:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );

    case 5:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 6:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 7:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 8:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 9:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    case 10:
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
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>

                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Notes;
