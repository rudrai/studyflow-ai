import { NavLink } from "react-router-dom";

import {
  Home,
  CalendarDays,
  Clock3,
  BarChart3,
  FileText,
  BookOpen,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h1>StudyFlow AI</h1>
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <Home size={22} />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/planner"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <CalendarDays size={22} />
          <span>Planner</span>
        </NavLink>

        <NavLink
          to="/focus"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <Clock3 size={22} />
          <span>Focus Timer</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <BarChart3 size={22} />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FileText size={22} />
          <span>Notes</span>
        </NavLink>

        <NavLink
          to="/subjects"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <BookOpen size={22} />
          <span>Subjects</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <Settings size={22} />
          <span>Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;