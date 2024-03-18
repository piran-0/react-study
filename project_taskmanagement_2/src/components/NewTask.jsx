import { useState } from "react"

export default function NewTask({ onAdd }) {
    const [inputText, setInputText] = useState("")

    function textChangeHandler(e) {
        setInputText(e.target.value)
    }

    function textAddHandler() {
        if (inputText.trim() === "") {
            return
        }
        onAdd(inputText)
        setInputText("")
    }

    return (
        <div>
            <input type="text" onChange={textChangeHandler} value={inputText} />
            <button onClick={textAddHandler}>추가하기</button>
        </div>
    )
}