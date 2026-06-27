import { NavLink } from "react-router-dom";

import {
  Home,
  CalendarDays,
  Clock3,
  BarChart3,
  FileText,
  BookOpen,
  Settings,
  X,
} from "lucide-react";

function MobileSidebar({ isOpen, closeSidebar }) {
  return (
    <aside
      className={`mobile-sidebar ${
        isOpen ? "mobile-sidebar-open" : ""
      }`}
    >
      <div className="mobile-sidebar-header">
        <h2>StudyFlow AI</h2>

        <button
          className="close-sidebar-btn"
          onClick={closeSidebar}
        >
          <X size={24} />
        </button>
      </div>

      <nav className="mobile-sidebar-nav">

        <NavLink
          to="/"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <Home size={22} />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/planner"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <CalendarDays size={22} />
          <span>Planner</span>
        </NavLink>

        <NavLink
          to="/focus"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <Clock3 size={22} />
          <span>Focus Timer</span>
        </NavLink>

        <NavLink
          to="/analytics"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <BarChart3 size={22} />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/notes"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <FileText size={22} />
          <span>Notes</span>
        </NavLink>

        <NavLink
          to="/subjects"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <BookOpen size={22} />
          <span>Subjects</span>
        </NavLink>

        <NavLink
          to="/settings"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <Settings size={22} />
          <span>Settings</span>
        </NavLink>

      </nav>
    </aside>
  );
}

export default MobileSidebar;