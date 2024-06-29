import { getByTestId, render, screen } from "@testing-library/react";
import TasksPage from "./TasksPage";
import { TaskContext, TaskProviderWrapper } from "../context/task.context";
import { MemoryRouter } from "react-router-dom";

jest.mock("../components/HeaderComponent.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe("Tasks Page", () => {
  it("Should find 'Tasks'", () => {
    const { getByTestId } = render(
      <TaskProviderWrapper>
        {/* <MemoryRouter> */}
        <TasksPage />
        {/* </MemoryRouter> */}
      </TaskProviderWrapper>
    );

    const tasksTitle = getByTestId("tasks-title").textContent;
    expect(tasksTitle).toEqual("Tasks");
  });

  it("Should find 'No se han podido obtener las tareas'", () => {
    const { getByTestId } = render(
      <TaskContext.Provider
        value={{
          tasks: [],
          getTasks: () => {},
          hasError: true,
          hasLoaded: false,
        }}
      >
        <TasksPage />
      </TaskContext.Provider>
    );

    const errorMsg = getByTestId("error-msg").textContent;
    expect(errorMsg).toEqual("No se han podido obtener las tareas");
  });

  it("Should find 'Cargando...'", () => {
    const { getByTestId } = render(
      <TaskContext.Provider
        value={{
          tasks: [],
          getTasks: () => {},
          hasError: false,
          hasLoaded: false,
        }}
      >
        <TasksPage />
      </TaskContext.Provider>
    );

    const loadingMsg = getByTestId("loading-msg").textContent;
    expect(loadingMsg).toEqual("Cargando...");
  });

  it("Should find the tasks", async () => {
    const tasks = [
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

    render(
      <TaskContext.Provider
        value={{
          tasks,
          getTasks: () => {},
          hasError: false,
          hasLoaded: true,
        }}
      >
        <TasksPage />
      </TaskContext.Provider>
    );

    expect(await screen.findByDisplayValue("Comprar la cena")).toBeVisible();
    expect(await screen.findByDisplayValue("Lavar los platos")).toBeVisible();
  });
});
