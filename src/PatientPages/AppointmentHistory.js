import React ,{ useState } from 'react';

function AppointmentHistory(props){
    const [records , setRecords] = useState(props.records ? props.records : null)
    

    return(
        <div >
                <hr style= {{marginTop : "40px"}}></hr>
                <div className="table container">
                    <div className="Thead row">
                        <div className="Thid col-md-1"><h3>شماره نوبت</h3></div>
                        <div className="Thid col-md-3"><h3>دکتر</h3></div>
                        <div className="Thid col-md-3"><h3>تخصص</h3></div>
                        <div className="Thid col-md-3"><h3>تاریخ</h3></div>
                        <div className="Thid col-md-2"><h3>وضعیت</h3></div>
                    </div>   
                {
                records && records.map(element => {
                    let color;
                    if(element.AppState == "نا موفق"){
                        color="rgb(202, 33, 33)";
                    }
                    else if (element.AppState == "رزرو شده") {
                        color="rgb(38, 226, 38)";
                    }
                    else if(element.AppState == "انجام شده"){
                        color="rgb(64, 64, 255)";
                    }
                    else{
                        color="lightgray"
                    }
                    return (
                    <div className="Tt row" style={{backgroundColor: color}}>
                    <div className="Tbid col-md-1"><h3>{element.Num}</h3></div>
                    <div className="Tbid col-md-3"><h3>{element.Docter}</h3></div>
                    <div className="Tbid col-md-3"><h3>{element.Proficiency}</h3></div>
                    <div className="Tbid col-md-3"><h3>{element.AppDate}</h3></div>
                    <div className="Tbid col-md-2"><h3>{element.AppState}</h3></div>
                            </div>
                    )
                })}
            </div>
    </div> 
    )
}

export default AppointmentHistory