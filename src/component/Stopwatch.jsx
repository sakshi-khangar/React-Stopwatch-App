import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("stopped");
  const intervalRef = useRef(null);
  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [status]);
 const start = () => {
    setTime(0);
    setStatus("running");
  };
 const stop = () => {
    setTime(0);
    setStatus("stopped");
  };
 const pause = () => {
    setStatus("paused");
  };
 const resume = () => {
    setStatus("running");
  };
 return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <h2>Elapsed Time: {time} sec</h2>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={pause} disabled={status !== "running"}>
          Pause
        </button>
        <button onClick={resume} disabled={status !== "paused"}>
          Resume
        </button>
      </div>
    </div>
  );
}
export default Stopwatch;
