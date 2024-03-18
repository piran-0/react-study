import { useState } from "react"

export default function Player({ firstName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(firstName)

    function editBtnHandler() {
        setIsEditing(editing => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }

    }

    let editName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editName = <input type="text" required value={playerName} onChange={nameSaveHandler} />
    }

    function nameSaveHandler(e) {
        setPlayerName(e.target.value)
    }

    return <li className={isActive ? "active" : undefined}>
        <span className="player">
            {editName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={editBtnHandler}>{isEditing ? "Save" : "Edit"}</button>
        </span>
    </li>
}