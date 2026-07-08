import jsPDF from "jspdf";

export function generateReport(prediction) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(22);
  doc.text("Urban Air AI Report", 20, y);

  y += 15;

  doc.setFontSize(12);

  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, y);

  y += 15;

  doc.text(
    `Predicted AQI : ${prediction?.predicted_aqi ?? "--"}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Category : ${prediction?.aqi_category ?? "--"}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Risk Level : ${prediction?.risk_level ?? "--"}`,
    20,
    y
  );

  y += 20;

  doc.setFontSize(16);
  doc.text("Health Advisory", 20, y);

  y += 10;

  doc.setFontSize(12);

  doc.text(
    prediction?.health_advisory ?? "No advisory available.",
    20,
    y,
    {
      maxWidth: 170,
    }
  );

  y += 25;

  doc.setFontSize(16);

  doc.text("Recommendations", 20, y);

  y += 10;

  doc.setFontSize(12);

  if (
    prediction?.recommendations &&
    prediction.recommendations.length > 0
  ) {
    prediction.recommendations.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });
  } else {
    doc.text("No recommendations available.", 20, y);
    y += 8;
  }

  y += 10;

  doc.setFontSize(16);

  doc.text("Enforcement", 20, y);

  y += 10;

  doc.setFontSize(12);

  prediction?.enforcement?.recommended_actions?.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  doc.save("Urban-Air-AI-Report.pdf");
}