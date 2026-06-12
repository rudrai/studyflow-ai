import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const studyData = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4.5 },
  { day: "Sun", hours: 2.5 },
];

function Analytics() {
  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <p>Track your study performance and progress.</p>
      </div>

      {/* Chart */}
      <div className="analytics-card">
        <h2>📊 Study Hours This Week</h2>

        <div className="chart-placeholder">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={studyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="hours"
                fill="#7c5cff"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="analytics-card">
        <h2>🤖 AI Study Insights</h2>

        <div className="insights-list">
          <p>✅ Most productive day: Thursday</p>
          <p>📈 Focus score increased by 8%</p>
          <p>📚 Physics needs more attention</p>
          <p>⏰ Best study time: 5PM - 8PM</p>

          <div className="recommendation">
            Recommendation: Schedule Physics revision on Saturday.
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="analytics-card">
        <h2>📚 Subject Performance</h2>

        <div className="subject-row">
          <span>Math</span>
          <div className="progress-bar">
            <div style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="subject-row">
          <span>Physics</span>
          <div className="progress-bar">
            <div style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="subject-row">
          <span>Chemistry</span>
          <div className="progress-bar">
            <div style={{ width: "82%" }}></div>
          </div>
        </div>

        <div className="subject-row">
          <span>Biology</span>
          <div className="progress-bar">
            <div style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="subject-row">
          <span>English</span>
          <div className="progress-bar">
            <div style={{ width: "95%" }}></div>
          </div>
        </div>
      </div>

      {/* Weekly Goals */}
      <div className="analytics-card">
        <h2>🎯 Weekly Goals</h2>

        <div className="subject-row">
          <span>Study Hours (32 / 40 hrs)</span>
          <div className="progress-bar">
            <div style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="subject-row">
          <span>Tasks Completed (15 / 20)</span>
          <div className="progress-bar">
            <div style={{ width: "75%" }}></div>
          </div>
        </div>

        <div className="subject-row">
          <span>Mock Tests (4 / 5)</span>
          <div className="progress-bar">
            <div style={{ width: "90%" }}></div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="analytics-card">
        <h2>🏆 Achievements</h2>

        <div className="achievement-grid">

          <div className="achievement-card">
            🔥
            <h3>14 Day Streak</h3>
            <p>Keep learning every day</p>
          </div>

          <div className="achievement-card">
            📚
            <h3>100 Tasks Completed</h3>
            <p>Productivity Master</p>
          </div>

          <div className="achievement-card">
            ⏱️
            <h3>150 Study Hours</h3>
            <p>Focused Learner</p>
          </div>

          <div className="achievement-card">
            🎯
            <h3>92% Productivity</h3>
            <p>Excellent Performance</p>
          </div>

        </div>
      </div>

      {/* Heatmap */}
      <div className="analytics-card">
        <h2>📅 Study Consistency</h2>

        <p className="heatmap-subtitle">
          Your study activity over the last 30 days
        </p>

        <div className="heatmap-grid">
          {[
            1,1,1,0,2,3,1,
            0,1,2,3,2,1,0,
            1,3,2,1,0,2,3,
            1,2,3,2,1,0,1,
            3,2
          ].map((value, index) => (
            <div
              key={index}
              className={`heat-cell level-${value}`}
            ></div>
          ))}
        </div>

        <div className="heatmap-legend">
          <span>Less</span>

          <div className="heat-cell level-0"></div>
          <div className="heat-cell level-1"></div>
          <div className="heat-cell level-2"></div>
          <div className="heat-cell level-3"></div>

          <span>More</span>
        </div>
      </div>

    </div>
  );
}

export default Analytics;