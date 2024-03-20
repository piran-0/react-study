import { useState } from "react"

import QuizTimer from "./QuizTimer"
import Answers from "./Answers"
import QUESTION from "../question.js"

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTION[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = ""

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong"
    } else if (answer.selectedAnswer) {
        answerState = "answered"
    }

    return <div id="question">
        <QuizTimer
            timeout={3000}
            onTimeout={onSkipAnswer}
        />
        <h2>{QUESTION[index].text}</h2>
        <Answers
            answers={QUESTION[index].answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
        />
    </div>

}