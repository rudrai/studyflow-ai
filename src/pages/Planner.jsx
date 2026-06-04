import { useState, useEffect } from "react";

function Planner() {
  const [taskName, setTaskName] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("studyflow-tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "studyflow-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!taskName || !subject || !dueDate) return;

    const newTask = {
      id: Date.now(),
      taskName,
      subject,
      dueDate,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setSubject("");
    setDueDate("");
    setPriority("Medium");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="planner-page">
      <div className="planner-header">
        <h1>Study Planner</h1>
        <p>Manage your tasks and deadlines.</p>
      </div>

      {/* Stats */}

      <div className="planner-stats">
        <div className="planner-stat-card">
          <h4>Total Tasks</h4>
          <h2>{tasks.length}</h2>
        </div>

        <div className="planner-stat-card">
          <h4>Completed</h4>
          <h2>{completedTasks}</h2>
        </div>

        <div className="planner-stat-card">
          <h4>Pending</h4>
          <h2>{pendingTasks}</h2>
        </div>
      </div>

      {/* Form */}

      <div className="planner-form">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) =>
            setTaskName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="tasks-section">
        {tasks.length === 0 && (
          <div className="empty-state">
            <h3>No Tasks Yet</h3>

            <p>
              Add your first study task above.
            </p>
          </div>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${
              task.completed
                ? "completed-task"
                : ""
            }`}
          >
            <div
              className={`priority-badge ${
                task.priority.toLowerCase()
              }`}
            >
              {task.priority}
            </div>

            <h3>{task.taskName}</h3>

            <p>
              Subject: {task.subject}
            </p>

            <p>
              Due: {task.dueDate}
            </p>

            <div className="task-actions">
              <button
                className="complete-btn"
                onClick={() =>
                  toggleComplete(task.id)
                }
              >
                {task.completed
                  ? "Completed ✓"
                  : "Complete"}
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteTask(task.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planner;