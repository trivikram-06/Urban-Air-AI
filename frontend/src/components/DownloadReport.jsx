import { usePrediction } from "../hooks/usePrediction";
import { generateReport } from "../utils/generateReport";

function DownloadReport() {
  const { prediction } = usePrediction();

  return (
    <button
      onClick={() => generateReport(prediction)}
      style={{
        marginTop: "25px",
        padding: "15px 25px",
        borderRadius: "12px",
        border: "none",
        background: "#2563eb",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      📄 Download AQI Report
    </button>
  );
}

export default DownloadReport;