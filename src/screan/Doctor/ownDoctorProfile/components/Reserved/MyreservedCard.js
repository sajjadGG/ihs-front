import React from 'react';
import AvatarImage100 from "../../../../../functions/returnElement/returnAvatarPic100";

const MyReservedCard = (props)=>{
    const {name,avatar,time,clinic}=props;
    return(
        <div className='my-patient-reserved big-anim'>
            <div className='info-reserved-patient'>
                <AvatarImage100 name={name} h='40px'/>
                <h3>{name}</h3>
            </div>
            <div >
                <div><i className='far fa-clock' />  {time}</div>
            </div>
            <div>
                <div><i className='fa fa-hospital-o '/> {clinic}</div>
            </div>

            <button className='cancel-btn'>Cancellation </button>
        </div>
    );

};

export  default MyReservedCard;