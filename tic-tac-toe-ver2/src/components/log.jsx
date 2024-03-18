export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li>
                    {turn.player} 플레이어가 {turn.square.row}, {turn.square.col} 위치를 골랐습니다.
                </li>
            ))}
        </ol>
    );
}
