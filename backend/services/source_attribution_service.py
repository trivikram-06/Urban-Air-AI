def estimate_sources(data: dict):
    """
    Estimate pollution source contribution using pollutant signatures.

    This is a rule-based explainable model suitable for hackathon demos.
    """

    # ----------------------------
    # Extract values safely
    # ----------------------------

    pm25 = float(data.get("pm2_5_ugm3", 0))
    pm10 = float(data.get("pm10_ugm3", 0))
    no2 = float(data.get("no2_ugm3", 0))
    co = float(data.get("co_ugm3", 0))
    so2 = float(data.get("so2_ugm3", 0))
    o3 = float(data.get("o3_ugm3", 0))
    dust = float(data.get("dust_ugm3", 0))

    crop_burning = bool(data.get("crop_burning_season", False))
    festival = bool(data.get("festival_period", False))

    # ----------------------------
    # Traffic Score
    # ----------------------------

    traffic = (no2 * 2.0) + (co * 25)

    if festival:
        traffic += 20

    # ----------------------------
    # Construction Score
    # ----------------------------

    construction = (pm10 * 0.5) + (dust * 1.0)

    # ----------------------------
    # Industrial Score
    # ----------------------------

    industry = (so2 * 3.0) + (o3 * 0.5)

    # ----------------------------
    # Crop Burning Score
    # ----------------------------

    crop = 0

    if crop_burning:
        crop = pm25 * 0.8

    # ----------------------------
    # Avoid zero scores
    # ----------------------------

    traffic = max(traffic, 1)
    construction = max(construction, 1)
    industry = max(industry, 1)
    crop = max(crop, 1)

    # ----------------------------
    # Total
    # ----------------------------

    total = traffic + construction + industry + crop

    # ----------------------------
    # Percentages
    # ----------------------------

    traffic_pct = round((traffic / total) * 100)
    construction_pct = round((construction / total) * 100)
    industry_pct = round((industry / total) * 100)

    crop_pct = (
        100
        - traffic_pct
        - construction_pct
        - industry_pct
    )

    # ----------------------------
    # Confidence Score
    # ----------------------------

    confidence = min(
        98,
        max(
            75,
            int(
                80 +
                (pm25 + pm10 + no2) / 100
            )
        )
    )

    # ----------------------------
    # Final Response
    # ----------------------------

    return {

        "Traffic": {
            "contribution": traffic_pct,
            "confidence": confidence
        },

        "Construction": {
            "contribution": construction_pct,
            "confidence": confidence - 2
        },

        "Industries": {
            "contribution": industry_pct,
            "confidence": confidence - 4
        },

        "Crop Burning": {
            "contribution": crop_pct,
            "confidence": confidence - 1
        }

    }