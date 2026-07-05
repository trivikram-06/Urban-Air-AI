import { useState } from "react";
import { PredictionContext } from "./PredictionContext";

export function PredictionProvider({ children }) {
  const [prediction, setPrediction] = useState(null);

  return (
    <PredictionContext.Provider
      value={{ prediction, setPrediction }}
    >
      {children}
    </PredictionContext.Provider>
  );
}