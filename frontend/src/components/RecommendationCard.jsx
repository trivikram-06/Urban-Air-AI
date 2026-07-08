import { usePrediction } from "../hooks/usePrediction";
import "./RecommendationCard.css";

function RecommendationCard() {
  const { prediction } = usePrediction();

  return (
    <div className="recommendation-card">
      <h2>🤖 Recommendations</h2>

      {!prediction ? (
        <p>Generate a prediction to view recommendations.</p>
      ) : prediction.recommendations &&
        prediction.recommendations.length > 0 ? (
        <ul>
          {prediction.recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}

export default RecommendationCard;