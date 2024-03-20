import { useState, useCallback } from "react"
import QUESTION from "../question.js"
import Question from "./Question.jsx"
import Summary from "./Summary.jsx"

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    const isQuizCompleted = activeQuestionIndex === QUESTION.length

    const activeAnswersHandler = useCallback(function activeAnswersHandler(selectedAnswer) {
        setUserAnswers(prevAnswers => {
            return [...prevAnswers, selectedAnswer]
        })
    }, [])

    const skipAnswerHandler = useCallback(() => activeAnswersHandler(null), [activeAnswersHandler])

    if (isQuizCompleted) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={activeAnswersHandler}
                onSkipAnswer={skipAnswerHandler}
            />
        </div>
    )
}