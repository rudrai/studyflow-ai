function ProgressCard() {
  return (
    <div className="progress-card">

      <h3>Study Progress</h3>

      <div className="progress-circle">
        <span>72%</span>
      </div>

      <div className="progress-info">

        <div className="progress-row">
          <span>Completed</span>
          <span>72%</span>
        </div>

        <div className="progress-row">
          <span>In Progress</span>
          <span>18%</span>
        </div>

        <div className="progress-row">
          <span>Pending</span>
          <span>10%</span>
        </div>

      </div>

    </div>
  )
}

export default ProgressCard
