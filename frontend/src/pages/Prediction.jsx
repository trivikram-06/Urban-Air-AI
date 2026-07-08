import PredictionForm from "../components/PredictionForm";
import "./Prediction.css";

function Prediction() {
  return (
    <div className="prediction-page">

      <div className="prediction-header">
        <h1>🌍 Predict Air Quality</h1>
        <p>
          AI Powered Smart City Air Quality Prediction System
        </p>
      </div>

      <PredictionForm />

    </div>
  );
}

export default Prediction;