import StatCard from "./StatCard"

function DashboardHero() {
  return (
    <section className="dashboard-hero">

      <div className="quote-card">
        <p>
          “Small consistent effort beats motivation.”
        </p>
      </div>

      <div className="stats-grid">

        <StatCard
          title="Study Hours"
          value="4.6 hrs"
          subtitle="+1.2 hrs from yesterday"
        />

        <StatCard
          title="Tasks Completed"
          value="12/18"
          subtitle="67% completed"
        />

        <StatCard
          title="Current Streak"
          value="7 days"
          subtitle="Keep going 🔥"
        />

        <StatCard
          title="Focus Score"
          value="85/100"
          subtitle="Excellent focus"
        />

      </div>
    </section>
  )
}

export default DashboardHero
