import React from "react";
import './addedFriendCardStyle.css'
import AvatarImage from '../../../functions/returnElement/returnAvatarPic'
const AddedFriendCard = (props)=>
{
    const {name,avatar}=props;
    return(
        <div className='container-added-friend-card'>
            {name?<h5>{name}</h5>:null}
            <div className='scale-les'>
                <AvatarImage name={name} avatar={avatar} wid='60'/>
            </div>

        </div>
    );
};

export default AddedFriendCard;