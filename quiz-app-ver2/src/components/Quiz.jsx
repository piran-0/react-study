import { useState } from "react"
import QUESTION from "../question.js"
import quizEndImg from "../assets/quiz-complete.png"
import QuizTimer from "./QuizTimer.jsx"

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    const isQuizCompleted = activeQuestionIndex === QUESTION.length

    function activeAnswersHandler(selectedAnswer) {
        setUserAnswers(prevAnswers => {
            return [...prevAnswers, selectedAnswer]
        })
    }

    if (isQuizCompleted) {
        return (
            <div id="summary">
                <img src={quizEndImg} alt="quiz end!" />
                <h2>퀴즈가 완료되었습니다!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTION[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return (
        <div id="quiz">
            <div id="question">
                <QuizTimer timeout={10000} onTimeout={() => activeAnswersHandler(null)} />
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
            </div>
            <ul id="answers">
                {shuffledAnswers.map(answer => {
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