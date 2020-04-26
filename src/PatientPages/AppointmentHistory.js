import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';


function AppointmentHistory(props){

    let color=null;
    const AppState = 0;
    if(AppState == 0){
        color="rgb(202, 33, 33)";
    }
    else if (AppState == 1 ) {
        color="rgb(38, 226, 38)";
    }
    else if(AppState ==2){
        color="rgb(64, 64, 255)";
    }
   
    const Appointment =
    <div className="table container">
        <div className="Thead row">
            <div className="Thid col-md-1"><h3>شماره نوبت</h3></div>
            <div className="Thid col-md-3"><h3>دکتر</h3></div>
            <div className="Thid col-md-3"><h3>تخصص</h3></div>
            <div className="Thid col-md-3"><h3>تاریخ</h3></div>
            <div className="Thid col-md-2"><h3>وضعیت</h3></div>
        </div>   
        <div className="Tt row" style={{backgroundColor: color}}>
            <div className="Tbid col-md-1"><h3>1</h3></div>
            <div className="Tbid col-md-3"><h3>علی محمدی</h3></div>
            <div className="Tbid col-md-3"><h3>اعصاب</h3></div>
            <div className="Tbid col-md-3"><h3>98/12/12</h3></div>
            <div className="Tbid col-md-2"><h3>انجام شده</h3></div>
        </div>   
    </div>
    
        return(
            <div >
                <hr style= {{marginTop : "40px"}}></hr>
                <div className="container ">

                {Appointment}

            <h1 > "HHHHHH"</h1>
            </div></div>
        );

    
}

export default AppointmentHistory;