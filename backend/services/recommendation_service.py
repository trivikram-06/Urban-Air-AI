def get_aqi_category(aqi: float):

    if aqi <= 50:
        return "Good"

    elif aqi <= 100:
        return "Moderate"

    elif aqi <= 150:
        return "Unhealthy for Sensitive Groups"

    elif aqi <= 200:
        return "Unhealthy"

    elif aqi <= 300:
        return "Very Unhealthy"

    else:
        return "Hazardous"


def get_risk_level(aqi: float):

    if aqi <= 100:
        return "Low"

    elif aqi <= 200:
        return "Medium"

    elif aqi <= 300:
        return "High"

    return "Critical"


def get_health_advisory(aqi: float):

    if aqi <= 50:
        return "Air quality is good. Outdoor activities are safe."

    elif aqi <= 100:
        return "Sensitive individuals should monitor symptoms."

    elif aqi <= 150:
        return "Children and elderly should reduce prolonged outdoor activity."

    elif aqi <= 200:
        return "Avoid prolonged outdoor exercise."

    elif aqi <= 300:
        return "Stay indoors whenever possible. Wear an N95 mask if outside."

    return "Health emergency. Avoid going outside unless absolutely necessary."


def get_recommendations(aqi: float):

    actions = []

    if aqi > 100:
        actions.append("Increase public transport frequency")

    if aqi > 150:
        actions.append("Restrict heavy vehicle movement")

    if aqi > 200:
        actions.append("Deploy water sprinklers on major roads")

    if aqi > 250:
        actions.append("Inspect nearby construction sites")

    if aqi > 300:
        actions.append("Issue public health emergency alerts")

    return actions