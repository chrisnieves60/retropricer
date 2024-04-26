"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
  ReactNode,
} from "react";
import AWS from "../awsConfig"; // Assuming this imports correctly configured AWS SDK
import { useCallback } from "react";
import { useMemo } from "react";
import { version } from "os";

interface PriceData {
  [key: string]: string | undefined;
}
interface DataProviderProps {
  children: ReactNode; // This type includes anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
}

const DataContext = createContext<PriceData | null>(null);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<PriceData | null>(null);
  const s3 = useMemo(() => new AWS.S3(), []); // Ensures `s3` is only instantiated once
  const fetchedRef = useRef(false);
  const consoles = [
    "dsScraper",
    "gbaScraper",
    "scraped_data",
    "ps1Scraper",
    "ps2Scraper",
    "ps3Scraper",
    "segaScraper",
    "xboxScraper",
    "xbox360Scraper",
    "wiiScraper",
  ];
  // const getObjectPromise = useCallback(
  //   async (version: AWS.S3.ObjectVersion) => {
  //     const prefix = version.Key?.split(".json")[0] || "";
  //     const latestData = await s3
  //       .getObject({
  //         Bucket: "retropricer",
  //         Key: `${prefix}.json`,
  //         VersionId: version.VersionId,
  //       })
  //       .promise();

  //     if (latestData && latestData.Body) {
  //       return {
  //         prefix,
  //         price: JSON.parse(latestData.Body!.toString("utf-8")).average_price,
  //       };
  //     } else {
  //       console.error(`Failed to retrieve object for prefix: ${prefix}`);
  //       return null;
  //     }
  //   },
  //   [s3],
  // );

  async function fetchLatestPrices(prefixes: string[]): Promise<void> {
    try {
      if (fetchedRef.current) return;
      fetchedRef.current = true; // Mark as fetched

      const promises = prefixes.map(async (prefix) => {
        const versions = await s3
          .listObjectVersions({
            Bucket: "retropricer",
            Prefix: `${prefix}.json`,
          })
          .promise();

        if (!versions.Versions || versions.Versions.length === 0) {
          console.error(`No versions found for prefix: ${prefix}`);
          return [];
        } else {
          console.log(versions.Versions[0].VersionId);
        }
        const latestVersionId = versions.Versions[0].VersionId;
        const latestData = await s3
          .getObject({
            Bucket: "retropricer",
            Key: `${prefix}.json`,
            VersionId: latestVersionId,
          })
          .promise();

        if (latestData && latestData.Body) {
          const { average_price } = JSON.parse(
            latestData.Body.toString("utf-8"),
          );
          return { prefix, price: average_price };
        } else {
          console.error(`Failed to retrieve object for prefix: ${prefix}`);
          return null;
        }
      });

      // const allVersions = (await Promise.all(versionPromises)).flat();
      // console.log(versionPromises);
      // // Ensure sorting is correctly handled with TypeScript
      // allVersions.sort((a, b) => {
      //   if (b.LastModified && a.LastModified) {
      //     return b.LastModified.getTime() - a.LastModified.getTime();
      //   }
      //   return 0;
      // });

      const results = await Promise.all(promises);
      const newData: PriceData = results.reduce((acc, result) => {
        if (result && "price" in result) {
          acc[result.prefix] = result.price.toString();
        }
        return acc;
      }, {} as PriceData);
      setData(newData);
      console.log(newData);
    } catch (error) {
      console.error("error fetching data", error);
    }
  }
  useEffect(() => {
    if (!fetchedRef.current) {
      fetchLatestPrices(consoles);
    }
  }, [fetchLatestPrices, consoles]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
