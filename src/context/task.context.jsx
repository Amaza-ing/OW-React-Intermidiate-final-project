import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
  const [tasks, setTasks] = useState([]);

  const API_URL = "https://ca5f63dffc6a5f0f7362.free.beeceptor.com/api/tasks/";

  const getTasks = async () => {
    console.log("get Tasks");
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  const addTask = async (newTask) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newTask),
      });
      setTasks([newTask, ...tasks]);
    } catch (e) {
      console.log(e);
    }
  };

  const updateTask = (updatedTask) => {
    const uptadedTasks = tasks.map((task) => {
      if (task.id !== updatedTask.id) return task;
      return updatedTask;
    });

    setTasks(uptadedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, getTasks, addTask, updateTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProviderWrapper };
