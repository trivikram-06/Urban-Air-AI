import { usePrediction } from "../hooks/usePrediction";

function HealthAdvisory() {

    const { prediction } = usePrediction();

    return (

        <div className="card">

            <h2>🏥 Health Advisory</h2>

            <p>

                {prediction?.health_advisory ??
                    "Generate a prediction to see health advice."}

            </p>

        </div>

    );

}

export default HealthAdvisory;