import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';


function AppointmentHistory(props){

    const [Num , setNum] = useState(props.Num ? props.Num : null);
    const [Docter , setDocter] = useState(props.Docter ? props.Docter : null);
    const [Proficiency , setProficiency] = useState(props.Proficiency ? props.Proficiency : null);
    const [AppDate , setAppDate] = useState(props.AppDate ? props.AppDate : null);
    const [AppState , setAppstate] = useState(props.AppState ? props.AppState : null);


    let color=null;

    if(AppState == "نا موفق"){
        color="rgb(202, 33, 33)";
    }
    else if (AppState == "رزرو شده") {
        color="rgb(38, 226, 38)";
    }
    else if(AppState == "انجام شده"){
        color="rgb(64, 64, 255)";
    }
    else{
        color="lightgray"
    }
   
    const Appointment =
    <div className="Tt row" style={{backgroundColor: color}}>
    <div className="Tbid col-md-1"><h3>{Num}</h3></div>
    <div className="Tbid col-md-3"><h3>{Docter}</h3></div>
    <div className="Tbid col-md-3"><h3>{Proficiency}</h3></div>
    <div className="Tbid col-md-3"><h3>{AppDate}</h3></div>
    <div className="Tbid col-md-2"><h3>{AppState}</h3></div>
</div> 

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
                    {Appointment}
                </div>
            </div>
        );

    
}

export default AppointmentHistory;