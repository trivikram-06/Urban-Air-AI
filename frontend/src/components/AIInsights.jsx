import { usePrediction } from "../hooks/usePrediction";
import "./AIInsights.css";

function AIInsights() {
  const { prediction } = usePrediction();

  if (!prediction) {
    return (
      <div className="ai-card">
        <h2>🤖 AI Insights</h2>
        <p>Generate a prediction to view AI insights.</p>
      </div>
    );
  }

  const traffic =
    prediction.pollution_sources?.Traffic?.contribution ?? 0;

  return (
    <div className="ai-card">

      <h2>🤖 AI Insights</h2>

      <p>
        Traffic contributes <strong>{traffic}%</strong> of today's pollution.
      </p>

      <p>
        Current Risk Level :
        <strong> {prediction.risk_level}</strong>
      </p>

      <h3>Recommended Actions</h3>

      <ul>

        {prediction.enforcement?.recommended_actions?.map(
          (item, index) => (
            <li key={index}>{item}</li>
          )
        )}

      </ul>

    </div>
  );
}

export default AIInsights;