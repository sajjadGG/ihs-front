import React from "react";
import { withRouter } from "react-router-dom";
import './searchDoctorStyle.css'
import {addFollower} from '../../../api/apiFunction'
import AvatarImage from "../../../functions/returnElement/returnAvatarPic";
import {getToken} from "../../../functions/saveDataLocalStorage/localStorageFunction";

const CardDoctor = (props)=>{
    // console.log('rr',props)
    const {user,name,id,medicalCouncilId,avatar,speciality}= props;
    function click(){
        console.log(props);
        props.history.push(`/doctorPage/${id}`);

    }

async function onFollow(e){
        const token = await getToken();
    const check = await addFollower({followee : user,token:token});
    console.log(check);
}

function onMessage(e){
    props.history.push(`/message/${JSON.parse(localStorage.getItem('user')).username}/${user}`)
}

return(
    <div className='col-md-4'style={{margin:'15px 0' , padding:'0px 200px 0 0'}}>
        <div className="profile-card-1 card" style={{width:"18rem"}}>
            <div className='avatar-img'>
                <AvatarImage avatar={avatar} name={name}/>
            </div>

            <div className="card-body"  onClick={click}>
                <h5 className="card-title">{speciality}</h5>
                <p className="card-text">{medicalCouncilId}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{name}</li>
            </ul>
            <div className="card-body">
                <button  className="btn-primary" onClick={onFollow}>follow</button>
                {/*<a href="#" className="card-link">Another link</a>*/}
            </div>
            <div className="card-body">
                <button  className="btn-success" onClick={onMessage}>message</button>
                {/*<a href="#" className="card-link">Another link</a>*/}
            </div>
        </div>
    </div>

)
}
export default withRouter(CardDoctor);