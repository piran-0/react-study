import { useState, useCallback } from "react"
import QUESTION from "../question.js"
import quizEndImg from "../assets/quiz-complete.png"
import Question from "./Question.jsx"

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
            <div id="summary">
                <img src={quizEndImg} alt="quiz end!" />
                <h2>퀴즈가 완료되었습니다!</h2>
            </div>
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