import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const currentDate = time.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const currentTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (

    <nav className="navbar">

      <div className="navbar-left">

        <h2>🌍 Urban Air AI</h2>

        <p>AI Powered Smart City Monitoring</p>

      </div>

      <div className="navbar-right">

        <div className="status">

          <span className="green-dot"></span>

          System Online

        </div>

        <div className="datetime">

          📅 {currentDate}

        </div>

        <div className="datetime">

          🕒 {currentTime}

        </div>

      </div>

    </nav>

  );
}

export default Navbar;