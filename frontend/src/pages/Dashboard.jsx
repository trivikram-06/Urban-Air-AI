import AQICard from "../components/AQICard";
import PollutionMap from "../components/PollutionMap";
import AnalyticsChart from "../components/AnalyticsChart";
import RecommendationCard from "../components/RecommendationCard";
import HealthAdvisory from "../components/HealthAdvisory";
import PollutionSources from "../components/PollutionSources";
import EnforcementCard from "../components/EnforcementCard";
import { usePrediction } from "../hooks/usePrediction";



import "./Dashboard.css";

function Dashboard() {
  const { prediction } = usePrediction();

  return (
    <>
      <h1>🌍 Urban Air AI Dashboard</h1>
      <p>AI Powered Smart City Monitoring System</p>

      <div className="cards">
        <AQICard
          title="AQI"
          value={prediction?.predicted_aqi ?? "--"}
        />

        <AQICard
          title="Category"
          value={prediction?.aqi_category ?? "--"}
        />

        <AQICard
          title="Risk Level"
          value={prediction?.risk_level ?? "--"}
        />

        <AQICard
          title="PM2.5"
          value={prediction?.pm2_5_ugm3 ?? "--"}
          unit="µg/m³"
        />
      </div>

      <div className="chart-section">
        <AnalyticsChart />
      </div>

      <div className="map-section">
        <PollutionMap />
      </div>

      <HealthAdvisory />

      <PollutionSources />

      <EnforcementCard />

      <RecommendationCard />
    </>
  );
}

export default Dashboard;