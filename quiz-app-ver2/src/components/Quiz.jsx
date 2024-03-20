import { useState, useCallback } from "react"
import QUESTION from "../question.js"
import quizEndImg from "../assets/quiz-complete.png"
import QuizTimer from "./QuizTimer.jsx"

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const [answerState, setAnswerState] = useState("")

    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1

    const isQuizCompleted = activeQuestionIndex === QUESTION.length

    const activeAnswersHandler = useCallback(function activeAnswersHandler(selectedAnswer) {
        setAnswerState("answered")
        setUserAnswers(prevAnswers => {
            return [...prevAnswers, selectedAnswer]
        })

        setTimeout(() => {
            if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
                setAnswerState("correct")
            } else {
                setAnswerState("wrong")
            }

            setTimeout(() => {
                setAnswerState("")
            }, 2000)

        }, 1000)

    }, [activeQuestionIndex])

    const skipAnswerHandler = useCallback(() => activeAnswersHandler(null), [activeAnswersHandler])

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
                <QuizTimer
                    key={activeQuestionIndex}
                    timeout={3000}
                    onTimeout={skipAnswerHandler}
                />
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
            </div>
            <ul id="answers">
                {shuffledAnswers.map(answer => {
                    let cssClasses = ""
                    const isSelected = answer === userAnswers[userAnswers.length - 1]

                    if (answerState === "answered" && isSelected) {
                        cssClasses = "selected"
                    }

                    if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                        cssClasses = answerState
                    }


                    return (
                        <li key={answer} className="answer">
                            <button onClick={() => activeAnswersHandler(answer)} className={cssClasses}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}