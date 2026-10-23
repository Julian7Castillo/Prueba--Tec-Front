
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Media");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setPriority("Media");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Nueva tarea</h2>

      <label htmlFor="title">Título</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ej. Terminar el proyecto"
        required
      />

      <label htmlFor="description">Descripción</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe la tarea..."
      />

      <button type="submit">Agregar tarea</button>
    </form>
  );
}

export default TaskForm;
