import React from "react";
import './alertStyle.css'
const Alerts = (props)=>{
    const {alert}=props;
    console.log("hiiii",alert)
    if(alert==='su'){
        return(
            <div className="alert hide-alert su">
                <span className="icon-left">o</span>
                <span className="msg">warngign</span>
                <span className="clseBtn">
            <span className="icon-right">x</span>
        </span>
            </div>
        );


    }
    else if(alert==='wa'){
        return(
            <div className="alert hide-alert">
                <span className="icon-left">o</span>
                <span className="msg">warngign</span>
                <span className="clseBtn">
            <span className="icon-right">x</span>
        </span>
            </div>
        );

    }
    else if(alert==='wr') {
        return (
            <div className="alert hide-alert wr">
                <span className="icon-left">o</span>
                <span className="msg">warngign</span>
                <span className="clseBtn">
            <span className="icon-right">x</span>
        </span>
            </div>
        );
    }
    const alerts = document.querySelector('.alert');
    const classs = alerts.classList;
    if (classs.contains('hide-alert')) {
        classs.remove('hide-alert');
        classs.add('show-alert');
        setTimeout(() => {
            classs.remove('show-alert');
            classs.add('hide-alert');
        }, 1900);
    }


};

export default Alerts;