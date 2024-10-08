import "./TasksPage.css";
import { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { TaskContext } from "../context/task.context";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";

function TasksPage() {
  const { tasks, hasLoaded, hasError, getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, []);

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="tasks-page">
        <h2 className="title" data-testid="tasks-title">
          Tasks
        </h2>
        <ul className="task-list">
          <li>
            <CreateTask></CreateTask>
          </li>
          {hasError ? (
            <h2 data-testid="error-msg">No se han podido obtener las tareas</h2>
          ) : !hasLoaded ? (
            <h2 data-testid="loading-msg">Cargando...</h2>
          ) : (
            taskCards
          )}
        </ul>
      </section>
    </>
  );
}
export default TasksPage;
