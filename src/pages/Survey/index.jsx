import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Loader } from "../../utils/style/Atoms";

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const previousQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;

    const [questions, setQuestions] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSurvey() {
            setIsDataLoading(true);
            try {
                const resp = await fetch('http://localhost:8000/survey');
                const { surveyData } = await resp.json();
                setQuestions(surveyData);
            } catch (err) {
                setError(err);
            }
            finally {
                setIsDataLoading(false)
            }
        }
        fetchSurvey();
    }, []);

    if (error) return <p>Oups ... Il y a eu un problème !</p>
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question n°{questionNumber}</h2>

            {isDataLoading ?
                <Loader /> :
                <p>{questions[questionNumber]}</p>
            }

            <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
            {questions[nextQuestionNumber] ? <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link> : <Link to='/results'>Résultats</Link>}

        </div>
    )
}

export default Survey;