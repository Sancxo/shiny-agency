import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Loader } from "../../utils/style/Atoms";
import { useFetch } from "../../utils/hooks";

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const previousQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;

    const { data, isLoading, error } = useFetch('http://localhost:8000/survey');
    const { surveyData } = data;

    if (error) return <p>Oups ... Il y a eu un problème !</p>
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question n°{questionNumber}</h2>

            {isLoading ?
                <Loader /> :
                <p>{surveyData && surveyData[questionNumber]}</p>
            }

            <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
            {surveyData && surveyData[nextQuestionNumber] ? <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link> : <Link to='/results'>Résultats</Link>}

        </div>
    )
}

export default Survey;