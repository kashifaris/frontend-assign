import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Timer() {
  const [sec, setsec] = useState(5);

  useEffect(() => {
    if (sec <= 0) return;
    const timeout = setTimeout(() => {
      setsec(sec - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  });
  return (
    <div className="timer" >
      {sec<=0 && <Navigate to="/thanks"></Navigate>}
      {sec}sec
    </div>
  );
}

export default Timer;
