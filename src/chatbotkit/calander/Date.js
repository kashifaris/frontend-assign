import { useState } from "react";

function Date({ selectDate, curdate }) {
  const [bg, setBg] = useState("");

  const setBgColor = () => {
    setBg("selected");
  };
  return (
    <div
      className={`date-container ${bg}`}
      onClick={() => {
        selectDate(curdate);
        setBgColor();
      }}
    >
      <h3 className="date">{curdate}</h3>
    </div>
  );
}

export default Date;
