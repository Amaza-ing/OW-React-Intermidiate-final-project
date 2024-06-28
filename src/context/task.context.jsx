import { createContext, useState } from "react";

const TaskContext = createContext();

const taskList = [
  {
    id: "1",
    title: "Comprar la cena",
    completed: false,
  },
  {
    id: "2",
    title: "Cocinar",
    completed: false,
  },
  {
    id: "3",
    title: "Cenar",
    completed: false,
  },
  {
    id: "4",
    title: "Lavar los platos",
    completed: false,
  },
];

function TaskProviderWrapper(props) {
  const [tasks, setTasks] = useState([...taskList]);

  const updateTask = (updatedTask) => {
    const uptadedTasks = tasks.map((task) => {
      if (task.id !== updatedTask.id) return task;
      return updatedTask;
    });

    setTasks(uptadedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, updateTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProviderWrapper };
