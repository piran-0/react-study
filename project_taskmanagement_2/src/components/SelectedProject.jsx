import Task from "./Task";

export default function SelectedProjcet({ project, onAddTask, tasks, onDeleteProject, onDeleteTask }) {

    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div>
            <div>
                <h2>{project.title}</h2>
                <button onClick={onDeleteProject}>삭제하기</button>
                <p>{formattedDate}</p>
                <p>{project.content}</p>
            </div>
            <div>
                <Task onAdd={onAddTask} tasks={tasks} onDelete={onDeleteTask} />
            </div>
        </div>
    )
}