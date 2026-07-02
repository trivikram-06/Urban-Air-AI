import joblib
import pandas as pd
from pathlib import Path

# Absolute path to model
BASE_DIR = Path(__file__).resolve().parent.parent.parent

MODEL_PATH = BASE_DIR / "ai" / "saved_models" / "aqi_model.pkl"

model = joblib.load(MODEL_PATH)


def predict_aqi(data: dict):

    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]

    return round(float(prediction), 2)