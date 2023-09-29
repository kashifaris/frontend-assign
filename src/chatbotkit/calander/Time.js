import { useState } from "react";

function Time({ curtime, selectTime }) {
  const [bg, setBg] = useState("");

  const setBgColor = () => {
    setBg("selected");
  };

  return (
    <div className={`time-container ${bg}`} onClick={() =>{ selectTime(curtime); setBgColor()}}>
      <h3>{curtime}</h3>
    </div>
  );
}

export default Time;
