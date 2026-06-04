function TaskItem({
  title,
  subtitle
}) {
  return (
    <div className="task-item">

      <div className="task-check">
        ✓
      </div>

      <div className="task-content">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>

    </div>
  )
}

export default TaskItem
