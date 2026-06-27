import { Search, Bell, Flame, Menu } from "lucide-react";

function Navbar({ openSidebar }) {
  return (
    <nav className="navbar">

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={openSidebar}
        >
          <Menu size={24} />
        </button>

        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

      </div>

      <div className="navbar-right">

        <div className="streak-badge">
          <Flame size={18} />
          <span>7 Day Streak</span>
        </div>

        <button className="notification-btn">
          <Bell size={20} />
        </button>

        <div className="profile-btn">

          <div className="profile-avatar">
            R
          </div>

          <div>
            <h4>Rudra</h4>
            <p>Student</p>
          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;