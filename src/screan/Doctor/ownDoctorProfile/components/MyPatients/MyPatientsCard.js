import React from 'react';
import AvatarImage100 from "../../../../../functions/returnElement/returnAvatarPic100";

const MyPatientCard = (props)=>{
    const {name,avatar,date,time,prescription}=props;
return(
    <div className='my-patient-card big-anim'>
        <div className='flex-row'>
            <AvatarImage100 name={name} h='40px'/>
            <h3>{name}</h3>
        </div>
        <div className='title date-time'>
            <div>{date} <i className='far fa-calendar-alt'/></div>
            <div>{time}<i className='far fa-clock' /></div>
        </div>
        <div className='bottom-card-myPatient'>
            <div>{prescription} <i className='fa fa-chain '/></div>

        </div>

    </div>
);

};

export  default MyPatientCard;