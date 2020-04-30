import React from "react";
import './avatarStyle.css'
const AvatarImage= (props)=>{
    const {avatar,name,wid}=props;
    console.log(props);
    if (avatar && wid){
        return (
            <div className='avatar-card' style={{"height":wid+"px",width:wid+"px"}}>
                <img src={avatar} alt='avatar'/>
            </div>
        )
    }
    else if (avatar){
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