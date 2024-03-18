import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NoContent from "./components/NoContent";
import SelectedProjcet from "./components/SelectedProject";

function App() {
  const [projectInfo, setProjectInfo] = useState({ projectId: undefined, projects: [], tasks: [] })

  //할일 추가하기 버튼 클릭 시 발동되는 함수
  function addStartHandle() {
    setProjectInfo(prevState => {
      return {
        ...prevState,
        projectId: null,
      }
    })
  }

  //할일 입력 후 저장하기 버튼 클릭 시 발동되는 함수: 새로운 할일 배열이 추가
  function taskSaveHandler(newTask) {
    setProjectInfo(prevState => {
      const newProject = {
        ...newTask,
        id: Math.random(),
      }

      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  //할일 입력 창에서 취소할 경우
  function taskEnterCancelHandler() {
    setProjectInfo(prevState => {
      return {
        ...prevState,
        projectId: undefined
      }
    })
  }

  //project 값 삭제하기
  function projectDeleteHandler() {
    setProjectInfo(
      prevState => {
        return {
          ...prevState,
          projectId: undefined,
          projects: prevState.projects.filter(
            project => project.id !== prevState.projectId
          )
        }
      }
    )
  }

  //새로운 Task 값  추가하기
  function addTaskHandler(text) {
    setProjectInfo(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        taskProjectId: projectInfo.projectId,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  //task 값 삭제하기
  function deleteTaskHandler(id) {
    setProjectInfo(
      prevState => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter(
            task => task.id !== id
          )
        }
      }
    )
  }

  //undefined나 null 상태의 projectId를 새 배열 추가될 때 생성되는 id랑 연결
  function linkProjectId(id) {
    setProjectInfo(prevState => {
      return {
        ...prevState,
        projectId: id
      }
    })
  }

  //프로젝트의 아이디를 받아왔으니 일치하는지 대조해서 일치할 경우, 해당 SelectedProject가 보이게 하기
  const selectedProject = projectInfo.projects.find(
    project => (project.id === projectInfo.projectId)
  )

  let content
    = <SelectedProjcet
      project={selectedProject}
      onAddTask={addTaskHandler}
      tasks={projectInfo.tasks}
      onDeleteProject={projectDeleteHandler}
      onDeleteTask={deleteTaskHandler} />

  if (projectInfo.projectId === undefined) {
    content = <NoContent addStart={addStartHandle} />
  } else if (projectInfo.projectId === null) {
    content = <Project onTaskSave={taskSaveHandler} onCancel={taskEnterCancelHandler} />
  }

  return (
    <>
      <main id="main">
        <Sidebar
          projects={projectInfo.projects}
          addStart={addStartHandle}
          onSelected={linkProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
