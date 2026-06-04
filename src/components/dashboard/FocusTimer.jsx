import { useEffect, useState } from "react";

function FocusTimer() {
  const [minutes, setMinutes] = useState(90);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(90);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            clearInterval(timer);
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(Number(customMinutes));
    setSeconds(0);
  };

  const setCustomTimer = () => {
    const value = Number(customMinutes);

    if (value > 0) {
      setMinutes(value);
      setSeconds(0);
      setIsRunning(false);
    }
  };

  const setPreset = (value) => {
    setMinutes(value);
    setSeconds(0);
    setCustomMinutes(value);
    setIsRunning(false);
  };

  return (
    <section className="focus-timer">

      <h2>Focus Timer</h2>

      <div className="timer-settings">
        <button
          className="preset-btn"
          onClick={() => setPreset(25)}
        >
          25m
        </button>

        <button
          className="preset-btn"
          onClick={() => setPreset(45)}
        >
          45m
        </button>

        <button
          className="preset-btn"
          onClick={() => setPreset(60)}
        >
          60m
        </button>

        <button
          className="preset-btn"
          onClick={() => setPreset(90)}
        >
          90m
        </button>
      </div>

      <div className="custom-time">
        <input
          type="number"
          min="1"
          value={customMinutes}
          onChange={(e) => setCustomMinutes(e.target.value)}
        />

        <button
          className="set-time-btn"
          onClick={setCustomTimer}
        >
          Set Time
        </button>
      </div>

      <div className="timer-display">
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      <div className="timer-controls">

        <button
          className="start-btn"
          onClick={startTimer}
        >
          Start
        </button>

        <button
          className="pause-btn"
          onClick={pauseTimer}
        >
          Pause
        </button>

        <button
          className="reset-btn"
          onClick={resetTimer}
        >
          Reset
        </button>

      </div>

    </section>
  );
}

export default FocusTimer;