import React from "react";

function GotitBtn(props) {

    const initialAction= ()=>{
        //console.log(props.actions.initialAction);
        props.actions.gotitmsg();
        props.actions.calenderStripMsg();
    }

  return (
    <div>
      <button className="gotitBtn" onClick={()=> initialAction()}>Got it !</button>
    </div>
  );
}

export default GotitBtn;
