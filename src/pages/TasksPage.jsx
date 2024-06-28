import "./TasksPage.css";
import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { TaskContext } from "../context/task.context";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { tasks } = useContext(TaskContext);

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="tasks-page">
        <h2 className="title">Tasks</h2>
        <ul className="task-list">{taskCards}</ul>
      </section>
    </>
  );
}
export default TasksPage;
