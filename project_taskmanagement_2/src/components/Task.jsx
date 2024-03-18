import { list } from "postcss";
import NewTask from "./NewTask";

export default function Task({ onAdd, tasks, onDelete }) {
    return (
        <section>
            <h2>할 일들</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && <p>할 일을 입력해주세요.</p>}
            {tasks.length > 0 && <ul>
                {tasks.map(task =>
                    <li key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => onDelete(task.id)}>삭제</button>
                    </li>)}
            </ul>
            }
        </section>
    );
}
