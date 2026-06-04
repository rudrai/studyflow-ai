function SubjectPerformance() {

  const subjects = [
    { name: "Math", score: 90 },
    { name: "Physics", score: 75 },
    { name: "Chemistry", score: 80 },
    { name: "Biology", score: 85 },
    { name: "English", score: 70 }
  ]

  return (
    <div className="subject-performance">

      <div className="subject-header">

        <h3>Subject Performance</h3>

        <span>This Week</span>

      </div>

      <div className="subject-bars">

        {subjects.map((subject) => (

          <div
            className="subject-item"
            key={subject.name}
          >

            <span className="score-label">
              {subject.score}%
            </span>

            <div
              className="subject-bar"
              style={{
                height: `${subject.score}%`
              }}
            ></div>

            <span className="subject-name">
              {subject.name}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default SubjectPerformance