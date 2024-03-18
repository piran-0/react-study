import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/log";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

const INITIAL_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, playerName) {
    let winner //undefined 상태임(이것도 false로 침)

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_BOARD.map(array=>[...array])]

  for (const turn of gameTurns) {
        const { square, player } = turn
        const { row, col } = square

        gameBoard[row][col] = player
  }

  return gameBoard

}


function App() {
  //상태를 최소화하기(상태 변경시 재시작/재시작을 많이 하면 버그일어날 가능성+비효율적) 
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, playerName)


  const hasDraw = gameTurns.length === 9 && !winner //!winner는 true로 바뀐거임

  function activePlayerHandler(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([])
  }

  function playerNameChange(symbol, newName) {
    setPlayerName(prevPlayers => {
      return {
        ...prevPlayers, 
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            firstName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={playerNameChange}
          />
          <Player
            firstName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={playerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart} />}
        <GameBoard onSelect={activePlayerHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
