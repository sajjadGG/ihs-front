import React from "react";
import './doctorcardStyle.css';
import Avatar from '../../../assets/image/profile.png';
import AvatarImage from "../../../functions/returnElement/returnAvatarPic";

class DoctorCard extends React.Component {
    constructor(props) {
        super(props);
        this.more = React.createRef();
        this.state={
            showMore:false,
        }
    }
    morefunction=()=>{
this.setState({...this.state,showMore:!this.state.showMore});
    };
    render() {
        const {name,avatar,speciality}=this.props;
const moreOption=<div className='more-info'>
    <h1>kdlasjfjsdljfsdjk</h1>
</div>;
        return (
            <div className='container-doctor-card'>
                <div className='first-item-show-card'>
                        <AvatarImage avatar={avatar} name={name}/>
                    <div className='midel-info-card'>
                    <h2>{name}</h2>
                    <h3>{speciality?speciality:""}</h3>
                    </div>

                    <div className='end-info-card'>
                    <div className='more' ref={this.more} onClick={this.morefunction}><h2> <i className = {+this.state.showMore?"fa fa-sort-desc rotate-up":"fa fa-sort-desc rotate-down "}/><span className={!this.state.showMore?"open-more":"close-more"}/></h2></div>
                </div>

                     </div>
                <div className='contaner-more-info'>
                    {this.state.showMore?moreOption:null}

                </div>

            </div>

        );
    }
}

export default DoctorCard;