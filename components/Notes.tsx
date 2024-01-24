import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import nintendoImage from "./nintendo.png"; // Adjust the path if necessary

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
                  src={nintendoImage} // Assuming the image is imported
                  alt="Product Image"
                  width={60} // Adjust the size to your preference
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

    default:
      return null;
  }
};

export default Notes;
