import { usePrediction } from "../hooks/usePrediction";

function RecommendationCard() {

    const { prediction } = usePrediction();

    if (!prediction)
        return null;

    return (

        <div className="card">

            <h2>🤖 Recommendations</h2>

            {

                prediction.recommendations.length === 0 ?

                    <p>No immediate action required.</p>

                    :

                    <ul>

                        {

                            prediction.recommendations.map((item, index) => (

                                <li key={index}>{item}</li>

                            ))

                        }

                    </ul>

            }

        </div>

    );

}

export default RecommendationCard;