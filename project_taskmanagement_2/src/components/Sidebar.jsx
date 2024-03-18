export default function Sidebar({ addStart, projects, onSelected }) {
    return (
        <aside id="sidebar-container">
            <h2 id="sidebar-title" className="h2-font">할일 목록</h2>
            <div>
                <button onClick={addStart} className="button">+ 할일 추가하기</button>
            </div>
            <ul>
                {projects.map(project => {
                    return (
                        <li key={project.id}>
                            <button onClick={() => onSelected(project.id)} className="button" >{project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside >
    );
}
