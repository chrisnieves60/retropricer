import AWS from "aws-sdk";

interface PriceData {
  timestamp: string;
  average_price: number;
}

class S3Service {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3();
  }

  async fetchPrices(prefix: string): Promise<PriceData[]> {
    try {
      // Retrieve the list of object versions
      const versions = await this.s3
        .listObjectVersions({
          Bucket: "retropricer",
          Prefix: prefix,
        })
        .promise();

      // Check if 'Versions' is defined and is an array
      if (!versions.Versions || !Array.isArray(versions.Versions)) {
        console.error("No versions found or 'Versions' is not an array");
        return [];
      }

      const dataPromises = versions.Versions.map((version) =>
        this.s3
          .getObject({
            Bucket: "retropricer",
            Key: prefix,
            VersionId: version.VersionId,
          })
          .promise(),
      );

      const dataObjects = await Promise.all(dataPromises);

      const processedData = dataObjects.map((data) => {
        if (!data.Body) throw new Error("No data body found");
        const content = JSON.parse(data.Body.toString("utf-8"));

        const timestamp = content["timestamp "];
        const averagePrice = content.average_price;

        return {
          timestamp,
          average_price: averagePrice,
        };
      });

      // Sort the data by timestamp
      processedData.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
      );

      return processedData;
    } catch (error: any) {
      console.error("An error occurred:", error.message);
      return [];
    }
  }
}

export default S3Service;
