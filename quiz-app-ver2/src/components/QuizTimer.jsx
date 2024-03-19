import { useState, useEffect } from "react"

export default function QuizTimer({ timeout, onTimeout }) {
    const [timeRemaining, setTimeRemaining] = useState(timeout)

    useEffect(() => {
        setTimeout(onTimeout, timeout)
    }, [onTimeout, timeout])


    useEffect(() => {
        setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 100)
        }, 100)
    }, [])


    return (
        <progress max={timeout} value={timeRemaining} />
    )
}