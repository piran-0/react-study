import nocontent from "../assets/no-projects.png"

export default function NoContent({ addStart }) {
    return (
        <div id="no-content">
            <div id="no-content-header">
                <h2>할일 목록을 적어주세요</h2>
                <button onClick={addStart} className="button">+ 할일 추가하기</button>
            </div>
            <img src={nocontent} alt="no-content" />
        </div>
    )
}