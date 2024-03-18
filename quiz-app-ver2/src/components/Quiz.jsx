import { useState } from "react"
import QUESTION from "../question.js"

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    function activeAnswersHandler(selectedAnswer) {
        setUserAnswers(prevAnswers => {
            return [...prevAnswers, selectedAnswer]
        })
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
            </div>
            <ul id="answers">
                {QUESTION[activeQuestionIndex].answers.map(answer => {
                    return (
                        <li key={answer} className="answer">
                            <button onClick={() => activeAnswersHandler(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}