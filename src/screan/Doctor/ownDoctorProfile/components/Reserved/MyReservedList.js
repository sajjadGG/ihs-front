import React from 'react';
import './MyReservedList.css';
import MyReservedCard from "./MyreservedCard";

const MyReservedList = (props)=>{
    const {listPatients} = props;
    const result = listPatients.map((element)=>
        <MyReservedCard name={element.name}  time={element.time} clinic={element.clinic}/>);
    return(
        <div className='container flex-column'>
            {result}
        </div>
    );

};

export  default MyReservedList;