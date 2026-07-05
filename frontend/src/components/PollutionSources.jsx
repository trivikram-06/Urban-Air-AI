import { usePrediction } from "../hooks/usePrediction";
import "./PollutionSources.css";

const icons = {
  Traffic: "🚗",
  Construction: "🏗️",
  Industries: "🏭",
  "Crop Burning": "🌾",
};

function PollutionSources() {
  const { prediction } = usePrediction();

  const sources = prediction?.pollution_sources;

  return (
    <div className="pollution-card">
      <h2>🏭 Pollution Sources</h2>

      {!sources ? (
        <p>No prediction available.</p>
      ) : (
        Object.entries(sources).map(([name, data]) => (
          <div className="source-row" key={name}>
            <span>
              {icons[name]} {name}
            </span>

            <strong>{data.contribution}%</strong>
          </div>
        ))
      )}
    </div>
  );
}

export default PollutionSources;