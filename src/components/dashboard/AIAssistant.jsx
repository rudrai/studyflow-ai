import { HiSparkles } from "react-icons/hi2"

function AIAssistant() {
  return (
    <section className="ai-widget">

      <span className="ai-tag">
        BETA
      </span>

      <div className="ai-content">

        <div className="ai-badge">
          <HiSparkles />
        </div>

        <h3>
          AI Study Assistant
        </h3>

        <p>
          Need help with studies?
          I can help with explanations,
          summaries, quizzes and notes.
        </p>

        <button className="ai-btn">
          Ask AI Assistant ✨
        </button>

      </div>

    </section>
  )
}

export default AIAssistant