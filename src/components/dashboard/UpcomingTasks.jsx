import TaskItem from "./TaskItem"

function UpcomingTasks() {
  return (
    <section className="tasks-widget">

      <div className="tasks-header">

        <h3>Upcoming Tasks</h3>

        <span>View all</span>

      </div>

      <div className="tasks-list">

        <TaskItem
          title="Math Assignment"
          subtitle="Due in 2 hrs"
        />

        <TaskItem
          title="Biology Quiz"
          subtitle="Tomorrow"
        />

        <TaskItem
          title="Physics Lab Report"
          subtitle="Due in 2 days"
        />

        <TaskItem
          title="English Essay"
          subtitle="Due in 6 days"
        />

      </div>

    </section>
  )
}

export default UpcomingTasks
