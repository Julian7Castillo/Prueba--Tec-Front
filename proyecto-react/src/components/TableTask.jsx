
function TaskTable({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No hay tareas registradas.</p>;
  }

  return (
    <div className="table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Prioridad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description || "Sin descripción"}</td>
              <td>
                <span
                  className={`priority priority-${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
              </td>
              <td>
                {task.completed ? "Completada" : "Pendiente"}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => onToggleTask(task.id)}
                >
                  {task.completed ? "Reabrir" : "Completar"}
                </button>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
