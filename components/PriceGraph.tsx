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

const PriceGraph = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Average Game Price Trend Over Time",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute", // Changed to 'minute' for more granularity
          tooltipFormat: "MMM d, yyyy, h:mm a", // Format to show date and time
        },
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          source: "auto",
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
