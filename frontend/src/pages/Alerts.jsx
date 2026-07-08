import "./Alerts.css";

function Alerts() {

  const alerts = [
    {
      title: "High AQI Alert",
      icon: "🚨",
      color: "#ef4444",
      priority: "HIGH",
      message: "AQI has crossed the safe limit in Bengaluru Central.",
    },
    {
      title: "School Advisory",
      icon: "🏫",
      color: "#f59e0b",
      priority: "MEDIUM",
      message: "Avoid outdoor sports for children.",
    },
    {
      title: "Hospital Advisory",
      icon: "🏥",
      color: "#3b82f6",
      priority: "HIGH",
      message: "Sensitive groups should wear masks.",
    },
    {
      title: "Traffic Control",
      icon: "🚗",
      color: "#22c55e",
      priority: "LOW",
      message: "Restrict heavy vehicles during peak hours.",
    },
    {
      title: "Construction Warning",
      icon: "🏗",
      color: "#8b5cf6",
      priority: "MEDIUM",
      message: "Increase water sprinkling to reduce dust.",
    },
  ];

  return (
    <div className="alerts-page">

      <h1>🚨 Smart Alerts</h1>

      <div className="alerts-grid">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="alert-card"
            style={{
              borderLeft: `8px solid ${alert.color}`,
            }}
          >

            <h2>
              {alert.icon} {alert.title}
            </h2>

            <p>{alert.message}</p>

            <span className="priority">

              Priority : {alert.priority}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Alerts;