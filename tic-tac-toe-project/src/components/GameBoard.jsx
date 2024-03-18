export default function GameBoard({ onSelectSquare, board }) {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         //왜 번거롭게 스프레드 연산자를 쓰는 이유
    //         //그냥 prevGameBoard[rowIndex][colIndex] = "X" 를 쓸 경우에는
    //         //원본의 복제가 아니라 원본 그대로 가져와서 쓰는거고
    //         //스프레드 연산자를 쓸 경우에는 원본의 카피본을 가져와서 쓰는거라 오류가 날 가능성도 적고 안정적임
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>
                            {playerSymbol}
                        </button>
                    </li>)}
            </ol>
        </li>)}
    </ol>
}