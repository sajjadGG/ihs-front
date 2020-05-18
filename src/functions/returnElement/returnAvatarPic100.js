import React from "react";
import './avatarStyle100.css'
const AvatarImage100= (props)=>{
    const {avatar,name,h}=props;
    console.log(props);
    if (avatar && h){
        return (
            <div className='avatar-card' style={ {height: h ,width : h} }>
                <img src={avatar} alt='avatar'/>
            </div>
        )
    }
    else if (avatar){
        return (
            <div className='avatar-card'  style={ {height: h ,width : h} }>
                <img src={avatar} alt='avatar'/>
            </div>
        )
    }

    return (
        <div className='avatar-card avatar-text' style={ {height: h ,width : h} }>
            <h3 className='text-avatar'>{name ? name[0] : "U"}</h3>
        </div>
    )
};

export default AvatarImage100;