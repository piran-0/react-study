import quizEndImg from "../assets/quiz-complete.png"
import QUESTION from "../question.js"

export default function Summary({ userAnswers }) {

    return <div id="summary">
        <img src={quizEndImg} alt="quiz end!" />
        <h2>퀴즈가 완료되었습니다!</h2>
        <div id="summary-stats">
            <p>
                <span className="number"></span>
                <span className="text"></span>
            </p>
            <p>
                <span className="number"></span>
                <span className="text"></span>
            </p>
            <p>
                <span className="number"></span>
                <span className="text"></span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = "user-answer"

                if (answer === null) {
                    cssClass += " skipped"
                } else if (answer === QUESTION[index].answers[0]) {
                    cssClass += " correct"
                } else {
                    cssClass += " wrong"
                }

                return (<li key={answer}>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTION[index].text}</p>
                    <p className={cssClass}>{answer ?? "Skipped"}</p>
                </li>
                )
            })}

        </ol>
    </div>
}