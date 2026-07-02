import pandas as pd
import joblib

from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

from xgboost import XGBRegressor

# ==============================
# Load Dataset
# ==============================

print("Loading dataset...")

df = pd.read_csv("../datasets/raw/aqi/aqi_india_38cols_knn_final.csv")

print(f"Dataset Shape : {df.shape}")

# ==============================
# Datetime Processing
# ==============================

df["datetime"] = pd.to_datetime(df["datetime"])

df = df.sort_values(["city", "datetime"])

# ==============================
# Create Forecast Target
# ==============================

df["target_aqi"] = df.groupby("city")["us_aqi"].shift(-1)

# ==============================
# Lag Features
# ==============================

df["prev_aqi"] = df.groupby("city")["us_aqi"].shift(1)

df["prev_pm25"] = df.groupby("city")["pm2_5_ugm3"].shift(1)

df["prev_pm10"] = df.groupby("city")["pm10_ugm3"].shift(1)

df["prev_co"] = df.groupby("city")["co_ugm3"].shift(1)

df["prev_no2"] = df.groupby("city")["no2_ugm3"].shift(1)

df["prev_so2"] = df.groupby("city")["so2_ugm3"].shift(1)

df["prev_o3"] = df.groupby("city")["o3_ugm3"].shift(1)

# ==============================
# Time Features
# ==============================

df["hour"] = df["datetime"].dt.hour

df["day"] = df["datetime"].dt.day

df["year"] = df["datetime"].dt.year

# Remove rows created by shifting

df = df.dropna()

print(f"Dataset after Feature Engineering : {df.shape}")

# ==============================
# Features
# ==============================

features = [

    "city",
    "latitude",
    "longitude",
    "month",
    "season",
    "time_of_day",

    "humidity_percent",
    "dew_point_c",
    "wind_gusts_kmh",
    "precipitation_mm",
    "pressure_msl_hpa",
    "cloud_cover_percent",

    "pm2_5_ugm3",
    "pm10_ugm3",
    "co_ugm3",
    "no2_ugm3",
    "so2_ugm3",
    "o3_ugm3",
    "dust_ugm3",

    "prev_aqi",
    "prev_pm25",
    "prev_pm10",
    "prev_co",
    "prev_no2",
    "prev_so2",
    "prev_o3",

    "is_weekend",
    "is_raining",

    "festival_period",
    "crop_burning_season",

    "hour",
    "day"

]

target = "target_aqi"

X = df[features]

y = df[target]

# ==============================
# Time Based Split
# ==============================

split_index = int(len(df) * 0.80)

X_train = X.iloc[:split_index]

X_test = X.iloc[split_index:]

y_train = y.iloc[:split_index]

y_test = y.iloc[split_index:]

print()

print("Training Samples :", len(X_train))

print("Testing Samples :", len(X_test))

# ==============================
# Encoding
# ==============================

categorical_columns = X.select_dtypes(include=["object"]).columns

preprocessor = ColumnTransformer(

    transformers=[

        (

            "cat",

            OneHotEncoder(handle_unknown="ignore"),

            categorical_columns

        )

    ],

    remainder="passthrough"

)

# ==============================
# Model
# ==============================

model = Pipeline(

    steps=[

        (

            "preprocessor",

            preprocessor

        ),

        (

            "model",

            XGBRegressor(

                n_estimators=100,

                max_depth=6,

                learning_rate=0.1,

                subsample=0.8,

                colsample_bytree=0.8,

                random_state=42,

                n_jobs=-1

            )

        )

    ]

)

# ==============================
# Train
# ==============================

print()

print("Training Started...")

model.fit(X_train, y_train)

print("Training Completed!")

# ==============================
# Prediction
# ==============================

predictions = model.predict(X_test)

# ==============================
# Evaluation
# ==============================

mae = mean_absolute_error(y_test, predictions)

rmse = mean_squared_error(y_test, predictions) ** 0.5

r2 = r2_score(y_test, predictions)

print()

print("=" * 40)

print("Model Performance")

print("=" * 40)

print(f"MAE  : {mae:.2f}")

print(f"RMSE : {rmse:.2f}")

print(f"R²   : {r2:.4f}")

# ==============================
# Save Model
# ==============================

joblib.dump(

    model,

    "../saved_models/aqi_model.pkl"

)

joblib.dump(

    features,

    "../saved_models/features.pkl"

)

print()

print("Model Saved Successfully!")

print("Feature List Saved!")