import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "6 AM", aqi: 85 },
  { time: "9 AM", aqi: 110 },
  { time: "12 PM", aqi: 150 },
  { time: "3 PM", aqi: 180 },
  { time: "6 PM", aqi: 140 },
  { time: "9 PM", aqi: 120 },
];

function AnalyticsChart() {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginTop: 20,
      }}
    >
      <h2>📈 AQI Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="aqi"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;