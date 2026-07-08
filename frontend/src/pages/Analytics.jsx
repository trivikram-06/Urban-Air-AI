import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { weeklyAQI, pollutantData } from "../data/analyticsData";

const COLORS = [
  "#22c55e",
  "#facc15",
  "#fb923c",
  "#ef4444",
  "#7e22ce",
];

function Analytics() {
  return (
    <div style={{ padding: "25px" }}>
      <h1>📊 Air Quality Analytics</h1>

      {/* Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginTop: "25px",
        }}
      >
        {/* Weekly AQI Chart */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <h3>Weekly AQI Trend</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyAQI}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="aqi"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <h3>Pollutant Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pollutantData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pollutantData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div className="aqi-card">
          <h3>Average AQI</h3>
          <h1>145</h1>
        </div>

        <div className="aqi-card">
          <h3>Highest AQI</h3>
          <h1>180</h1>
        </div>

        <div className="aqi-card">
          <h3>Lowest AQI</h3>
          <h1>110</h1>
        </div>

        <div className="aqi-card">
          <h3>Forecast</h3>
          <h1>Moderate</h1>
        </div>
      </div>
    </div>
  );
}

export default Analytics;