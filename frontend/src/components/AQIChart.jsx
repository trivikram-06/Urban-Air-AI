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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AQIChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "AQI",
        data: [120, 140, 170, 160, 180, 165, 155],
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
      },
    ],
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
      <h3>Weekly AQI Trend</h3>
      <Line data={data} />
    </div>
  );
}

export default AQIChart;