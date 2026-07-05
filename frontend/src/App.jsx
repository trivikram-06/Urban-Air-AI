import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";

import "./styles/dashboard.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <div className="main">

          <Sidebar />

          <div className="content">

            <Routes>
                <Route path="/" element={<Prediction />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/prediction" element={<Prediction />} />

                <Route path="/analytics" element={<Analytics />} />

                <Route path="/alerts" element={<Alerts />} />
            </Routes>

          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;