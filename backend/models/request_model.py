from pydantic import BaseModel

class PredictionRequest(BaseModel):

    city: str

    latitude: float

    longitude: float

    month: float

    season: str

    time_of_day: str

    humidity_percent: float

    dew_point_c: float

    wind_gusts_kmh: float

    precipitation_mm: float

    pressure_msl_hpa: float

    cloud_cover_percent: float

    pm2_5_ugm3: float

    pm10_ugm3: float

    co_ugm3: float

    no2_ugm3: float

    so2_ugm3: float

    o3_ugm3: float

    dust_ugm3: float

    prev_aqi: float

    prev_pm25: float

    prev_pm10: float

    prev_co: float

    prev_no2: float

    prev_so2: float

    prev_o3: float

    is_weekend: bool

    is_raining: bool

    festival_period: bool

    crop_burning_season: bool

    hour: int

    day: int