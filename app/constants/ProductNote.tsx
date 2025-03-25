// Constants file for gaming console information

export interface ConsoleNote {
  id: number;
  name: string;
  releaseDate: string;
  manufacturer: string;
  description: string;
  imageUrl: string;
  notableGames: string;
}

export const CONSOLE_NOTES: ConsoleNote[] = [
  {
    id: 1,
    name: "Xbox",
    releaseDate: "2001-11-15",
    manufacturer: "Microsoft, manufactured by Flextronics",
    description:
      "The Xbox was Microsoft's first foray into the home video game console market, competing directly with Sony's PlayStation 2 and Nintendo's GameCube. It featured powerful hardware for its time and helped establish Microsoft as a serious player in the gaming industry.",
    imageUrl: "URL of the image",
    notableGames: "Halo: Combat Evolved",
  },
  {
    id: 2,
    name: "PlayStation 2",
    releaseDate: "2000-03-04",
    manufacturer: "Sony Electronics, Foxconn",
    description:
      "The PS2 is the best-selling video game console of all time, with over 155 million units sold worldwide. It boasted an extensive game library, DVD playback capabilities, and backward compatibility with original PlayStation games.",
    imageUrl: "URL for the PlayStation 2 image",
    notableGames: "Grand Theft Auto: San Andreas",
  },
  {
    id: 3,
    name: "PlayStation 3",
    releaseDate: "2006-11-17",
    manufacturer: "Sony, Foxconn, Asus",
    description:
      "The PS3 is a seventh-generation home video game console that introduced Blu-ray disc support, a powerful Cell processor, and robust online gaming through the PlayStation Network. It competed intensely with Xbox 360 and Nintendo Wii.",
    imageUrl: "URL for the PlayStation 3 image",
    notableGames: "Grand Theft Auto V",
  },
  {
    id: 4,
    name: "Nintendo 64",
    releaseDate: "1996-06-23",
    manufacturer: "Nintendo",
    description:
      "The Nintendo 64, developed by Nintendo, was a pioneering 3D gaming console that introduced revolutionary controller design and iconic games like Super Mario 64, The Legend of Zelda: Ocarina of Time, and GoldenEye 007.",
    imageUrl: "URL for the Nintendo 64 image",
    notableGames: "Super Mario 64, The Legend of Zelda: Ocarina of Time",
  },
  {
    id: 5,
    name: "Xbox 360",
    releaseDate: "2005-11-22",
    manufacturer: "Microsoft",
    description:
      "The Xbox 360 was a major leap forward in home video game console technology, introducing high-definition gaming, Xbox Live, and a robust online multiplayer experience. It became extremely popular during the seventh generation of video game consoles.",
    imageUrl: "URL for the Xbox 360 image",
    notableGames: "Halo 3, Gears of War, Red Dead Redemption",
  },
  {
    id: 6,
    name: "Nintendo DS",
    releaseDate: "2004-11-21",
    manufacturer: "Nintendo",
    description:
      "The Nintendo DS is a dual-screen handheld gaming system that revolutionized portable gaming with its touchscreen interface, innovative game design, and massive library of unique and engaging games.",
    imageUrl: "URL for the Nintendo DS image",
    notableGames: "New Super Mario Bros., Mario Kart DS, Animal Crossing",
  },
  {
    id: 7,
    name: "Gameboy Advance",
    releaseDate: "2001-03-21",
    manufacturer: "Nintendo",
    description:
      "The Gameboy Advance is a handheld game console that succeeded the original Game Boy Color. It featured significantly improved graphics, a wider screen, and became home to many classic portable game titles.",
    imageUrl: "Link to Image",
    notableGames: "The Legend of Zelda: A Link to the Past/Four Swords",
  },
  {
    id: 8,
    name: "PlayStation 1",
    releaseDate: "1994-12-03",
    manufacturer: "Sony Computer Entertainment",
    description:
      "The PlayStation 1, also known as PS1 or PSX, was a groundbreaking console that helped transition video games into the 3D era. It featured a CD-ROM format and introduced many iconic game franchises.",
    imageUrl: "Link to Image",
    notableGames: "Final Fantasy VII, Metal Gear Solid, Resident Evil",
  },
  {
    id: 9,
    name: "Wii",
    releaseDate: "2006-11-19",
    manufacturer: "Nintendo",
    description:
      "The Wii is a home video game console known for its revolutionary motion control system. It appealed to a broader audience with intuitive gameplay and became a massive commercial success, outselling its competitors.",
    imageUrl: "Link to Image",
    notableGames: "Wii Sports, The Legend of Zelda: Twilight Princess",
  },
  {
    id: 10,
    name: "Sega Dreamcast",
    releaseDate: "1999-09-09",
    manufacturer: "Sega",
    description:
      "The Sega Dreamcast, launched in Japan and later worldwide, was Sega's final home video game console. It was technologically advanced for its time, featuring online play and innovative games, but ultimately was short-lived in the market.",
    imageUrl: "Link to Image",
    notableGames: "Sonic Adventure, Soul Caliber, Shenmue",
  },
];

// Helper function to get a specific console note by ID
export const getConsoleNoteById = (id: number): ConsoleNote | undefined => {
  return CONSOLE_NOTES.find((note) => note.id === id);
};
