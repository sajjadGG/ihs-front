import React,{Component} from "react";
import './doctorProfilePatient.css';
import Avatar from '../../../assets/image/log1.jpg';
class DoctorProfileFromPatient extends Component{
    constructor(props) {
        super(props);
        this.doctorref = React.createRef();
        this.locationref = React.createRef();
        this.reservref = React.createRef();
        this.state={
            show:this.doctorref,
        };
    }

    //
    toggleChangeContentInfoDoctor(inputRef){
    this.setState({...this.state,show:inputRef});
    }

    render() {
        const {show} = this.state;
        const doctorInfo = <div ref={this.doctorref}>
            <h1>سجاد</h1>
        </div>;
        const lcoationInfo = <div ref={this.locationref}>
            <h1>رضا</h1>

        </div>;
        const reservInfo = <div ref={this.reservref}>
        </div>;

        const showContent =show === this.doctorref ? doctorInfo :show ===this.locationref ? lcoationInfo : reservInfo;
        return(
            <div className='container-doctor-profile-patient'>
                <div className='info-doctor-container'>
                {/*    if have background set image*/}
                {/*<img/>*/}
                <div className='no-bg-profile-doctor'>
                    <div className='avatar-bg'>
                        <img src={Avatar} alt='avatar'/>
                    </div>
                </div>
                    <div className='info-doctor'>
                        <div className='header-info-doctor '>
                            <div className='header-items-doctor active-header-items' onClick={()=>this.toggleChangeContentInfoDoctor(this.doctorref)}>
                                <h2>مشخصات</h2>
                            </div>
                            <div className='header-items-doctor' onClick={()=>this.toggleChangeContentInfoDoctor(this.locationref)}>
                                <h2>ادرس</h2>
                            </div>
                            <div className='header-items-doctor' onClick={()=>this.toggleChangeContentInfoDoctor(this.reservref)}>
                                <h2>رزرو</h2>
                            </div>
                        </div>
                    </div>
                    {showContent}
                    </div>

            </div>
        );
    }
}

export default DoctorProfileFromPatient;