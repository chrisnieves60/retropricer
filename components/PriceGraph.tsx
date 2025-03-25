"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";

type priceGraphProps = {
  data: dataPoint[];
};

type dataPoint = {
  timestamp: string;
  average_price: number;
};

const PriceGraph: React.FC<priceGraphProps> = ({ data }) => {
  const getTimeUnit = (): "day" | "hour" | "week" | "month" => {
    if (data.length === 0) {
      return "day"; // Default unit if data is empty
    }

    if (!data[0].timestamp || !data[data.length - 1].timestamp) {
      console.error("Data is missing timestamp properties");
      return "day"; // Default unit if timestamp is missing
    }

    const startDate = new Date(data[0].timestamp);
    const endDate = new Date(data[data.length - 1].timestamp);
    const timeDiff = endDate.getTime() - startDate.getTime();

    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const oneMonth = oneDay * 30; // approximate milliseconds in a month
    const threeMonths = oneMonth * 3;

    if (timeDiff <= oneDay) {
      return "hour";
    } else if (timeDiff <= oneMonth) {
      return "day";
    } else if (timeDiff <= threeMonths) {
      return "week";
    } else {
      return "month";
    }
  };

  const [chartData, setChartData] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);

  useEffect(() => {
    // Only process chart data when data is available
    if (data.length > 0) {
      const newChartData = {
        labels: data.map((d) => d.timestamp),
        datasets: [
          {
            label: "Price",
            data: data.map((d) => d.average_price),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };

      const newOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Average Game Price Trend Over Time (Updated every 6 hrs)",
          },
        },
        scales: {
          x: {
            type: "time" as const,
            time: {
              unit: getTimeUnit() as "day" | "hour" | "week" | "month",
              tooltipFormat: "MMM d, yyyy, h:mm a",
            },
            title: {
              display: true,
              text: "Date",
            },
            ticks: {
              source: "auto" as const,
              autoSkip: true,
            },
          },
          y: {
            title: {
              display: true,
              text: "Average Price ($)",
            },
          },
        },
      };

      setChartData(newChartData);
      setOptions(newOptions);
    }
  }, [data]);

  // Determine loading state based on chart data
  const isLoading = !chartData;

  return (
    <>
      {isLoading ? (
        <div className="h-full w-full flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
        </div>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </>
  );
};

export default PriceGraph;
