import React from "react";
import doctor from "../imagesTest/docotr.png";
import { withRouter } from "react-router-dom";
import './searchDoctorStyle.css'
import {addFollower} from '../../api/apiFunction'

const CardDoctor = (props)=>{
    // console.log('rr',props)
    const {user,name,id,medicalCouncilId,avatar,speciality}= props;
    function click(){
        console.log(props);
        props.history.push(`/doctorPage/${id}`);

    }

async function onFollow(e){
    const check = await addFollower({followee : user});
}

return(
    <div className='col-md-4'style={{margin:'15px 0' , padding:'0px 200px 0 0'}} onClick={click}>
        <div className="profile-card-1 card" style={{width:"18rem"}}>
            {/*<img className="card-img-top" src={avatar} alt={name}/>*/}
            <img className="card-img-top" src={avatar} alt={name} style={{height:'250px'}}/>
            <div className="card-body">
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
        </div>
    </div>

)
}
export default withRouter(CardDoctor);