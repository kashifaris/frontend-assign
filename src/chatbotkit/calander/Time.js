function Time({curtime,selectTime}) {
    return ( <div className="time-container" onClick={()=>selectTime(curtime)}>
        <h3>{curtime}</h3>
    </div> );
}

export default Time;