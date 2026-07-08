import { useState } from "react";
import "./PredictionForm.css";
import { useNavigate } from "react-router-dom";
import { usePrediction } from "../hooks/usePrediction";
import API from "../services/api";

function PredictionForm() {
  const navigate = useNavigate();
  const { setPrediction } = usePrediction();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    city: "",
    pm25: "",
    pm10: "",
    humidity: "",
    wind_speed: "",
    season: "Summer",
    time_of_day: "Morning",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.city ||
      !formData.pm25 ||
      !formData.pm10 ||
      !formData.humidity ||
      !formData.wind_speed
    ) {
      alert("⚠ Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        city: formData.city,
        latitude: 12.9716,
        longitude: 77.5946,

        month: new Date().getMonth() + 1,

        season: formData.season,
        time_of_day: formData.time_of_day,

        humidity_percent: Number(formData.humidity),
        dew_point_c: 22,
        wind_gusts_kmh: Number(formData.wind_speed),
        precipitation_mm: 0,
        pressure_msl_hpa: 1012,
        cloud_cover_percent: 40,

        pm2_5_ugm3: Number(formData.pm25),
        pm10_ugm3: Number(formData.pm10),

        co_ugm3: 350,
        no2_ugm3: 20,
        so2_ugm3: 10,
        o3_ugm3: 40,
        dust_ugm3: 30,

        prev_aqi: 120,
        prev_pm25: 60,
        prev_pm10: 90,
        prev_co: 340,
        prev_no2: 18,
        prev_so2: 8,
        prev_o3: 35,

        is_weekend: false,
        is_raining: false,
        festival_period: false,
        crop_burning_season: false,

        hour: new Date().getHours(),
        day: new Date().getDate(),
      };

      const response = await API.post("/predict", payload);

      setPrediction(response.data);

      setLoading(false);

      alert("AQI Prediction Generated Successfully!");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      setLoading(false);

      alert("❌ Unable to connect to AI Prediction Server.");
    }
  };

  return (
    <form className="prediction-form" onSubmit={handleSubmit}>

      {/* Location Section */}

      <div className="form-section">

        <h2>📍 Location Information</h2>

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
        />

        <select
          name="season"
          value={formData.season}
          onChange={handleChange}
        >
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Monsoon">Monsoon</option>
        </select>

        <select
          name="time_of_day"
          value={formData.time_of_day}
          onChange={handleChange}
        >
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Night">Night</option>
        </select>

      </div>

      {/* Weather Section */}

      <div className="form-section">

        <h2>🌤 Weather Information</h2>

        <input
          type="number"
          name="humidity"
          placeholder="Humidity (%)"
          value={formData.humidity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="wind_speed"
          placeholder="Wind Speed (km/h)"
          value={formData.wind_speed}
          onChange={handleChange}
        />

      </div>

      {/* Pollution Section */}

      <div className="form-section">

        <h2>🏭 Pollution Information</h2>

        <input
          type="number"
          name="pm25"
          placeholder="PM2.5 (µg/m³)"
          value={formData.pm25}
          onChange={handleChange}
        />

        <input
          type="number"
          name="pm10"
          placeholder="PM10 (µg/m³)"
          value={formData.pm10}
          onChange={handleChange}
        />

      </div>

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "⏳ Predicting Air Quality..."
          : "🚀 Generate AI Prediction"}
      </button>

    </form>
  );
}

export default PredictionForm;