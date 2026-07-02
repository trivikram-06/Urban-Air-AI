def get_enforcement_actions(data: dict, predicted_aqi: float):

    actions = []
    priority = "LOW"

    # --------------------------
    # AQI Based
    # --------------------------

    if predicted_aqi > 300:
        priority = "CRITICAL"

        actions.extend([
            "Issue emergency public health alert",
            "Close schools for the day",
            "Restrict non-essential vehicle movement",
            "Deploy emergency air quality response teams"
        ])

    elif predicted_aqi > 200:
        priority = "HIGH"

        actions.extend([
            "Restrict heavy diesel vehicles",
            "Increase water sprinkling on major roads",
            "Inspect construction sites immediately"
        ])

    elif predicted_aqi > 150:
        priority = "MEDIUM"

        actions.extend([
            "Increase public transport frequency",
            "Monitor industrial emissions",
            "Issue advisory to sensitive groups"
        ])

    else:
        priority = "LOW"

        actions.append("Continue routine air quality monitoring")

    # --------------------------
    # Construction
    # --------------------------

    if data["dust_ugm3"] > 80:
        actions.append("Inspect nearby construction activities")

    # --------------------------
    # Traffic
    # --------------------------

    if data["no2_ugm3"] > 60:
        actions.append("Deploy traffic police at congestion hotspots")

    # --------------------------
    # Crop Burning
    # --------------------------

    if data["crop_burning_season"]:
        actions.append("Coordinate with agriculture department to monitor crop residue burning")

    # --------------------------
    # Festival
    # --------------------------

    if data["festival_period"]:
        actions.append("Issue firecracker usage advisory")

    # Remove duplicates
    actions = list(dict.fromkeys(actions))

    return {
        "priority": priority,
        "recommended_actions": actions
    }