import React ,{ useState } from 'react';

function AppointmentHistory(props){
    const [records , setRecords] = useState(props.records ? props.records : null)
    const [EditC , setEditC] = useState(null)
    let Del = (Num) => {
        setRecords(records.filter(i => i.Num != Num))
    }

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
                    let Cancel = null;
                    let Edit = null;
                    let laqv =<div onClick={()=> Del(element.Num)} style={{cursor:"pointer",backgroundColor:"rgb(114, 114, 114)" , border:"1px solid blue" , borderRadius:"10px"}}><h2>لغو</h2></div>

          
                    if(element.AppState == "نا موفق"){
                        color="rgb(255, 129, 129)";
                    }
                    else if (element.AppState == "رزرو شده") {
                        color="rgb(140, 228, 140)";
                        Edit = <i className="far fa-edit" onClick={EditC?()=>setEditC(null):()=>setEditC(laqv)} style={{cursor:"pointer"}}></i>
                        Cancel = EditC;
                    }
                    else if(element.AppState == "انجام شده"){
                        color="rgb(135, 135, 243)";
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
                    <div className="Tbid col-md-2"><h3>{element.AppState}{Edit}{Cancel}</h3></div>
                            </div>
                    )
                })}
            </div>
    </div> 
    )
}

export default AppointmentHistory