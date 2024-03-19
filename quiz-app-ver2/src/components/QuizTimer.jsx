import { useState, useEffect } from "react"

export default function QuizTimer({ timeout, onTimeout }) {
    const [timeRemaining, setTimeRemaining] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [onTimeout, timeout])


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 100)
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <progress max={timeout} value={timeRemaining} />
    )
}