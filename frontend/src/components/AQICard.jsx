import "./AQICard.css";

function AQICard({ title, value, unit, icon }) {
  return (
    <div className="aqi-card">

      <div className="aqi-header">

        <div className="aqi-icon">
          {icon}
        </div>

        <h3>{title}</h3>

      </div>

      <h1>
        {value}
        <span>{unit}</span>
      </h1>

    </div>
  );
}

export default AQICard;