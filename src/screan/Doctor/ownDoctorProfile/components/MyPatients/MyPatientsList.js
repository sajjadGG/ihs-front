import React from 'react';
import MyPatientCard from "./MyPatientsCard";
import './patientCardList.css';

const MyPatientsList = (props)=>{
    const {listPatients} = props;
    const result = listPatients.map((element)=>
    <MyPatientCard name={element.name} date={element.date} time={element.time} prescription={element.prescription}/>);
return(
    <div className='container flex-column'>
        {result}
    </div>
);

};

export  default MyPatientsList;