import ScheduleCard from "./ScheduleCard"

function ScheduleSection() {
  return (
    <section className="schedule-section">

      <div className="schedule-header">

        <h2>Your Schedule</h2>

        <span>
          This Week
        </span>

      </div>

      <div className="calendar-grid">

        <div className="day-column">
          <h5>Mon</h5>

          <ScheduleCard
            subject="English"
            time="11:00 - 12:30"
            color="#4f46e520"
          />

          <ScheduleCard
            subject="Math"
            time="3:00 - 4:00"
            color="#7c3aed20"
          />
        </div>

        <div className="day-column">
          <h5>Tue</h5>

          <ScheduleCard
            subject="Physics"
            time="1:00 - 2:30"
            color="#f9731620"
          />
        </div>

        <div className="day-column">
          <h5>Wed</h5>

          <ScheduleCard
            subject="Biology"
            time="9:00 - 10:30"
            color="#22c55e20"
          />

          <ScheduleCard
            subject="AI Study"
            time="5:00 - 6:30"
            color="#06b6d420"
          />
        </div>

        <div className="day-column">
          <h5>Thu</h5>

          <ScheduleCard
            subject="Chemistry"
            time="10:00 - 12:00"
            color="#ec489920"
          />
        </div>

        <div className="day-column">
          <h5>Fri</h5>

          <ScheduleCard
            subject="Revision"
            time="2:00 - 4:00"
            color="#eab30820"
          />
        </div>

      </div>

    </section>
  )
}

export default ScheduleSection