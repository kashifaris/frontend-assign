

function Date({selectDate,curdate}) {
    return ( <div className="date-container" onClick={()=>selectDate(curdate)}>
                <h3 className="date">{curdate}</h3>
    </div> );
}

export default Date;