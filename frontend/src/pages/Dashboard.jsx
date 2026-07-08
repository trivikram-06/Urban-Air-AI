import AQICard from "../components/AQICard";
import PollutionMap from "../components/PollutionMap";
import AnalyticsChart from "../components/AnalyticsChart";
import RecommendationCard from "../components/RecommendationCard";
import HealthAdvisory from "../components/HealthAdvisory";
import PollutionSources from "../components/PollutionSources";
import EnforcementCard from "../components/EnforcementCard";
import AIInsights from "../components/AIInsights";
import DownloadReport from "../components/DownloadReport";

import { usePrediction } from "../hooks/usePrediction";

import "./Dashboard.css";

function Dashboard() {
  const { prediction } = usePrediction();

  return (
    <div className="dashboard">

      <div className="dashboard-title">
        <h1>🌍 Urban Air AI Dashboard</h1>
        <p>AI Powered Smart City Monitoring System</p>
      </div>

      {/* AQI Cards */}
      <div className="cards">

        <AQICard
          icon="🌬"
          title="AQI"
          value={
            prediction?.predicted_aqi
              ? Math.round(prediction.predicted_aqi)
              : "--"
          }
        />

        <AQICard
          icon="📊"
          title="Category"
          value={prediction?.aqi_category ?? "--"}
        />

        <AQICard
          icon="⚠️"
          title="Risk"
          value={prediction?.risk_level ?? "--"}
        />

        <AQICard
          icon="🏭"
          title="PM2.5"
          value="--"
          unit="µg/m³"
        />

      </div>

      {/* Analytics Chart */}
      <div className="chart-section">
        <AnalyticsChart />
      </div>

      {/* Pollution Map */}
      <div className="map-section">
        <PollutionMap />
      </div>

      {/* Information Cards */}
      <HealthAdvisory />

      <PollutionSources />

      <EnforcementCard />

      <RecommendationCard />

      <AIInsights />

      {/* Download Report */}
      <div className="download-report">
        <DownloadReport />
      </div>

    </div>
  );
}

export default Dashboard;