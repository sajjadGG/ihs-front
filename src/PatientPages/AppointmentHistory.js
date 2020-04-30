import React ,{ useState } from 'react';

import {getMyAppointment} from "./../api/apiFunction"

class AppointmentHistory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            records : props.records ? props.records : null,
            EditC : null,

        }
    }

    Del = (Num) => {
        this.setState({records : this.state.records.filter(i => i.Num != Num)})
    }
    setEditC = (e) =>{
        this.setState({EditC: e})
    }


    async componentDidMount(){
        console.log("hiiiiiiiiii")
    console.log(JSON.parse(localStorage.getItem('userData')).user.username)
    const messageListdummy = await getMyAppointment({name:JSON.parse(localStorage.getItem('userData')).user.username})
    this.setState({records : messageListdummy})

    }
    render(){
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
                    
                this.state.records && this.state.records.map(element => {
                    let color;
                    let Cancel = null;
                    let Edit = null;
                    let laqv =<div onClick={()=> this.Del(element.id)} style={{cursor:"pointer",backgroundColor:"rgb(114, 114, 114)" , border:"1px solid blue" , borderRadius:"10px"}}><h2>لغو</h2></div>

          
                    if(element.status == "O"){
                        color="rgb(255, 129, 129)";
                    }
                    else if (element.status == "R") {
                        color="rgb(140, 228, 140)";
                        Edit = <i className="far fa-edit" onClick={this.state.EditC?()=>this.setEditC(null):()=>this.setEditC(laqv)} style={{cursor:"pointer"}}></i>
                        Cancel = this.state.EditC;
                    }
                    else if(element.status == "C"){
                        color="rgb(135, 135, 243)";
                    }
                    else{
                        color="lightgray"
                    }
                    return (
                    <div className="Tt row" style={{backgroundColor: color}}>
                    <div className="Tbid col-md-1"><h3>{element.id}</h3></div>
                    <div className="Tbid col-md-3"><h3>{element.doctorUsername}</h3></div>
                    <div className="Tbid col-md-3"><h3>{element.doctorSpeciality}</h3></div>
                    <div className="Tbid col-md-3"><h3>{element.start_time}</h3></div>
                    <div className="Tbid col-md-2"><h3>{element.status}{Edit}{Cancel}</h3></div>
                            </div>
                    )
                })}
            </div>
    </div> 
    )
            }
}

export default AppointmentHistory