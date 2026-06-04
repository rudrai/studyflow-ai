function ScheduleCard({
  subject,
  time,
  color
}) {
  return (
    <div
      className="schedule-card"
      style={{
        background: color
      }}
    >
      <h4>{subject}</h4>

      <p>{time}</p>
    </div>
  )
}

export default ScheduleCard

