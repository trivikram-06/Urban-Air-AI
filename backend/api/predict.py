from fastapi import APIRouter

from services.prediction_service import predict_aqi

from models.request_model import PredictionRequest

from services.source_attribution_service import estimate_sources

from services.enforcement_service import get_enforcement_actions

from services.recommendation_service import (
    get_aqi_category,
    get_risk_level,
    get_health_advisory,
    get_recommendations
)

router = APIRouter()


@router.post("/predict")
def predict(request: PredictionRequest):

    prediction = predict_aqi(request.model_dump())
    enforcement = get_enforcement_actions(
    request.model_dump(),
    prediction
    )
    sources = estimate_sources(request.model_dump())

    print("--------------------------------")
    print("Prediction:", prediction)
    print("Sources:", sources)
    print("--------------------------------")
    
    return {

    "predicted_aqi": prediction,

    "aqi_category": get_aqi_category(prediction),

    "risk_level": get_risk_level(prediction),

    "health_advisory": get_health_advisory(prediction),

    "recommendations": get_recommendations(prediction),

    "pollution_sources": sources,

    "enforcement": enforcement

}