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
          unit: "day",
          tooltipFormat: "MMM d, yyyy",
        },
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          // This will ensure that even if there's no data for a particular date,
          // the axis will still render the dates within this range
          source: "auto",
          autoSkip: true,
        },
        // Define the min and max range of the axis
        min: new Date(
          new Date().setDate(new Date().getDate() - 15),
        ).toISOString(),
        max: new Date().toISOString(),
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
