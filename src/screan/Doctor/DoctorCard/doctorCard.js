import React from "react";
import './doctorcardStyle.css';
import Avatar from '../../../assets/image/profile.png';

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
const moreOption=<div>
    <h1>kdlasjfjsdljfsdjk</h1>
    <h1>kdlasjfjsdljfsdjk</h1>
    <h1>kdlasjfjsdljfsdjk</h1>
    <h1>kdlasjfjsdljfsdjk</h1>
</div>;
        return (
            <div className='container-doctor-card'>
                <div className='first-item-show-card'>
                <div className='avatar-card'>
                    <img src={Avatar} alt='avatar'/>
                </div>
                <div className='midel-info-card'>
                    <h2>سجاد رمضانی</h2>
                    <h3>متخصص برنامه نویسی</h3>
                </div>

                <div className='end-info-card'>
                    <div className='more' ref={this.more} onClick={this.morefunction}><h2>{!this.state.showMore? <i className = "fa fa-sort-desc">بیشتر</i>
                        : <i className = "fa fa-sort-asc">بستن</i>}</h2></div>
                </div>
                </div>
                {this.state.showMore?moreOption:null}
            </div>
        );
    }
}

export default DoctorCard;