import {
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineFire,
  HiOutlineSparkles
} from "react-icons/hi2"

function StatCard({ title, value, subtitle }) {

  const icons = {
    "Study Hours": <HiOutlineClock />,
    "Tasks Completed": <HiOutlineCheckCircle />,
    "Current Streak": <HiOutlineFire />,
    "Focus Score": <HiOutlineSparkles />
  }

  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icons[title]}
      </div>

      <h4>{title}</h4>

      <h2>{value}</h2>

      <p>{subtitle}</p>

      <div className="mini-line"></div>

    </div>
  )
}

export default StatCard