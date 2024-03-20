import { useState } from "react"

import QuizTimer from "./QuizTimer"
import Answers from "./Answers"
import QUESTION from "../question.js"

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    let timer = 5000

    if (answer.selectedAnswer) {
        timer = 1000
    }

    if (answer.isCorrect !== null) {
        timer = 2000
    }

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
            key={timer}
            timeout={timer}
            onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
            mode={answerState}
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