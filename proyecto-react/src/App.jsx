
import { useState } from "react";
import TaskForm from "./components/FormTarea";
import TaskTable from "./components/TableTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <main className="app">
      <h1>Gestor de tareas</h1>

      <TaskForm onAddTask={addTask} />

      <section className="tasks-section">
        <h2>Lista de tareas</h2>

        <TaskTable
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </section>
    </main>
  );
}

export default App;
