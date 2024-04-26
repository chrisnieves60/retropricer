"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ConsoleCardProps = {
  consoleName: string;
  image: StaticImageData;
  data: string | undefined;
  releaseDate: string;
  link: string;
};
const ConsoleCard: React.FC<ConsoleCardProps> = ({
  consoleName,
  image,
  releaseDate,
  data,
  link,
}) => {
  return (
    <Link
      href={`/consoles/${link}`}
      className="group transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm rounded overflow-hidden shadow-lg bg-cardBG4 flex flex-col"
    >
      <div className="h-48 w-full overflow-hidden">
        {" "}
        {/* Set a fixed height container for the image */}
        <Image
          src={image}
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
        <div className="font-bold text-xl mb-2">{consoleName}</div>
        <p className="text-gray-700 text-base">
          Released: <span className="font-semibold">{releaseDate}</span>
        </p>
        <p className="text-gray-700 text-base">
          Current Avg. Price:{" "}
          <span className="font-semibold">
            ${data ? parseFloat(data).toFixed(2) : null}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ConsoleCard;
