import "./AQICard.css";

function AQICard({ title, value, unit }) {
  return (
    <div className="aqi-card">

      <h3>{title}</h3>

      <h1>
        {value}
        <span>{unit}</span>
      </h1>

    </div>
  );
}

export default AQICard;