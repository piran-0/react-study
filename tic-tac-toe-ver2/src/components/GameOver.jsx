export default function GameOver({ winner, restart }) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} 플레이어가 승리했습니다!</p>}
        {!winner && <p>무승부!</p>}
        <p>
            <button onClick={restart}>재시도!</button>
        </p>
    </div>
}