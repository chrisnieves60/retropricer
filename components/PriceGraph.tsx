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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Correctly using 'as const' for specific string literal type
      },
      title: {
        display: true,
        text: "Average Game Price Trend Over Time",
      },
    },
    scales: {
      x: {
        type: "time" as const, // Ensure this is 'time' or 'timeseries' as a specific string literal
        time: {
          unit: getTimeUnit() as "day" | "hour" | "week" | "month", // Ensure getTimeUnit() returns one of these specific units
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

  //expects data to be array of objects with data and price
  const chartData = {
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

  return <Line data={chartData} options={options} />;
};

export default PriceGraph;
