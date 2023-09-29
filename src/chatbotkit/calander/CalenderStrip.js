import React, { useState } from "react";
import Date from "./Date";
import Time from "./Time";
import { useSelector } from "react-redux";

function CalenderStrip(props) {
  const [dateSelect, setdateSelect] = useState("");
  //const [dates,setdates]= useState(["29 sep", "30 sep", "1 oct", "2 oct", "3 oct"]);
  const [hide, sethide] = useState(true);

  const selectDate = (value) => {
    console.log(value);
    setdateSelect(value);
  };

  const selectTime = (val) => {
    console.log("clicked time");
    sethide(false);
    props.actions.selectedDateMsg(dateSelect, val);
  };
  
  //const dates = ["29 sep", "30 sep", "1 oct", "2 oct", "3 oct"];
  const morning = ["8:00 AM", "10:00 AM", "12:00 AM"];
  const noon = ["2:00 PM", "4:00 PM", "6:00 PM"];
  const dates = useSelector((state) => state.data.dates);

 // console.log(dates);
  return (
    hide && (
      <div className="calender-box">
        <div className="date-box">
          {dates.map((x, index) => (
            <Date key={index} selectDate={selectDate} curdate={x}></Date>
          ))}
        </div>
        <div className="time-box-container">
          <div className="time-box">
            {dateSelect &&
              morning.map((x, index) => (
                <Time key={index} selectTime={selectTime} curtime={x}></Time>
              ))}
          </div>
          <div className="time-box">
            {dateSelect &&
              noon.map((x, index) => (
                <Time key={index} selectTime={selectTime} curtime={x}></Time>
              ))}
          </div>
        </div>
      </div>
    )
  );
}

export default CalenderStrip;
