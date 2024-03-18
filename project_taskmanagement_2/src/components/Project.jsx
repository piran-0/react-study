import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function Project({ onTaskSave, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const content = useRef();
    const date = useRef();

    function taskSaveHandler() {
        const enteredTitle = title.current.value;
        const enteredContent = content.current.value;
        const enteredDate = date.current.value;

        if (
            enteredTitle.trim() === "" ||
            enteredContent.trim() === "" ||
            enteredDate.trim() === ""
        ) {
            modal.current.open();
            return
        }

        onTaskSave({
            title: enteredTitle,
            content: enteredContent,
            date: enteredDate,
        });
    }

    return (
        <>
            <Modal ref={modal}>
                <h2>입력 오류!</h2>
                <p>모든 항목을 입력하였는지 확인해주세요.</p>
            </Modal>
            <div id="project-container">
                <div id="project-header">
                    <h2 id="project-title" className="h2-font">
                        할일을 입력하세요
                    </h2>
                    <menu id="project-btnList">
                        <li className="project-btn">
                            <button onClick={onCancel} className="button">취소하기</button>
                        </li>
                        <li className="project-btn">
                            <button onClick={taskSaveHandler} className="button">
                                저장하기
                            </button>
                        </li>
                    </menu>
                </div>
                <div id="project-input">
                    <Input ref={title} label="제목" type="text" />
                    <Input ref={content} label="내용" type="text" textarea />
                    <Input ref={date} label="날짜" type="date" />
                </div>
            </div>
        </>
    );
}
