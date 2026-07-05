import { usePrediction } from "../hooks/usePrediction";
import "./EnforcementCard.css";

function EnforcementCard() {
  const { prediction } = usePrediction();

  const enforcement = prediction?.enforcement;

  if (!enforcement) {
    return (
      <div className="enforcement-card">
        <h2>🚨 Enforcement</h2>
        <p>No enforcement recommendations available.</p>
      </div>
    );
  }

  const getPriorityClass = (priority) => {
    switch (priority?.toUpperCase()) {
      case "HIGH":
        return "high";
      case "MEDIUM":
        return "medium";
      default:
        return "low";
    }
  };

  return (
    <div className="enforcement-card">
      <h2>🚨 Enforcement</h2>

      <div className={`priority ${getPriorityClass(enforcement.priority)}`}>
        {enforcement.priority}
      </div>

      <h3>Recommended Actions</h3>

      <ul>
        {enforcement.recommended_actions.map((action, index) => (
          <li key={index}>✓ {action}</li>
        ))}
      </ul>
    </div>
  );
}

export default EnforcementCard;