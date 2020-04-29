import React from "react";
import './avatarStyle.css'
import Avatar from "../../assets/image/profile.png";
const AvatarImage= (props)=>{
    const {avatar,name}=props;
    if (avatar){
        return (
            <div className='avatar-card'>
                <img src={avatar} alt='avatar'/>
            </div>
        )
    }
    return (
        <div className='avatar-card avatar-text'>
            <h1 className='text-avatar'>{name[0]}</h1>
        </div>
    )
};

export default AvatarImage;