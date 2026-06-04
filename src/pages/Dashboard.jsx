import DashboardHero from "../components/dashboard/DashboardHero";
import ScheduleSection from "../components/dashboard/ScheduleSection";
import AIAssistant from "../components/dashboard/AIAssistant";
import UpcomingTasks from "../components/dashboard/UpcomingTasks";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";

function Dashboard() {
  return (
    <>
      <DashboardHero />

      <ScheduleSection />

      <div className="bottom-grid">
        <AIAssistant />
        <UpcomingTasks />
      </div>

      <AnalyticsSection />
    </>
  );
}

export default Dashboard;