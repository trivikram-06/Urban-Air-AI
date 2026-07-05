import { useContext } from "react";
import { PredictionContext } from "../context/PredictionContext";

export function usePrediction() {
  return useContext(PredictionContext);
}