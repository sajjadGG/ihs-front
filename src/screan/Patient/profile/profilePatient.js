import React from "react";
import './profilePageStyle.css';
import Avatar from '../../../assets/image/profile.png'
import {withRouter} from "react-router-dom";
import Sucses from "../../components/infoComponent/sucses";
import {getUserData} from "../../../functions/saveDataLocalStorage/localStorageFunction";
import AvatarImage from "../../../functions/returnElement/returnAvatarPic";

import AppointmentHistory from "../../../PatientPages/AppointmentHistory"
import AppointmentSearch from "../../../components/AppointmentSearch";

class ProfilePatient extends React.Component{
    constructor(props) {
        super(props);
        this.myPageRef = React.createRef();
        this.reminderRef = React.createRef();
        this.doctorDocument = React.createRef();
        this.doctorSearch = React.createRef();
        this.apointment = React.createRef();
        this.editProfileInfo = React.createRef();
        this.state={
            activeBar:this.myPageRef,
            editableMyPage:false,
            myPageName:" ",
            userId:"",
            showAlertSuccess:false,
            showAlertSuccessText:"",
            avatar:null,
            email:"",

        };
    }
    changeActiveBar=(refInput)=> {
        console.log(refInput.current)
        if (refInput !== this.state.activeBar) {
            this.setState({ activeBar: refInput});
        }
        if(refInput === this.doctorSearch){
            this.props.history.push("/searchDoctor");
        }
    };

    //my page function
    toggleEditableMyPage=()=>{
      this.setState({...this.state,editableMyPage:!this.state.editableMyPage});
    };

    toggleNameMyPage=(name)=>{
        console.log(name.target.value);
    this.setState({...this.state,myPageName:name.target.value});
    };


     getData=async()=>{
        const dataUser = await getUserData();
        console.log("namme",dataUser);
        const {name,lastname,full_name,username,avatar,email}=dataUser;
        this.setState({...this.state,myPageName:full_name,userId:username,email:email});
        if(avatar){
            this.setState({...this.state,avatar:avatar});
        }
        this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:" سلام "+full_name+" "});
        setTimeout(()=>{
            this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:''});
        },2500);
    };


    componentDidMount () {
     this.getData();
    };

    addFriend=()=>{
        this.props.history.push("/searchfriend");
    };

    render() {
        //create page under bar
        const myPageInfo=
            <div className='my-page-info container-info-patient'>
                <div className='avatar-profile'>
                    {/*<img src={Avatar} alt='avatar' className='avatar'/>*/}
                    <AvatarImage name={this.state.myPageName} avatar={this.state.avatar}/>
                    <i className="material-icons editable fas fa-pen" onClick={this.toggleEditableMyPage}/>
                </div>
                <label></label>
                <label>نام و نام خانوادگی</label>
                <input type='text' placeholder={this.state.myPageName} className={!this.state.editableMyPage?"fixed":""} onChange={(name)=>this.toggleNameMyPage(name)} value={this.state.myPageName}/>
                <label>نام کاربری</label>
                <input type='text' placeholder={this.state.userId} className={!this.state.editableMyPage?"fixed":""} onChange={(name)=>null} value={this.state.userId}/>
                <label>ایمیل</label>
                <input type='text' placeholder={this.state.email} className={!this.state.editableMyPage?"fixed":""} onChange={(name)=>null} value={this.state.email}/>

            </div>;

        const reminderPage=
            <div className='doctor-document-info container-info-patient'>

            <div className='reminder-page-info profile-items'>
            <div className='nothing-show'>
                <i className='fas fa-low-vision'/>
                <h1>
                    موردی یافت نشد
                </h1>
            </div>
            </div>
        </div>;

        //todo:check it if is not empty
        const doctorDocument =
            <div >
                <AppointmentHistory/>
            </div>;

        const apoinmentShow = <div><AppointmentSearch/></div>;
        let showPage;
        if (this.state.activeBar ===this.myPageRef){
            showPage = myPageInfo;
        }
        else if(this.state.activeBar ===this.reminderRef){
        showPage=reminderPage;
        }
        else if(this.state.activeBar ===this.doctorDocument){
        showPage=doctorDocument;
        }
        else if(this.state.activeBar === this.apointment){
            console.log("hiii")
            showPage=apoinmentShow;
        }
        return (
            <div className='container-mainPage'>
                <div className='events-bar-container'>
                    <div className={'event'}>
                        <i className="fa fa-calendar"><span>1</span></i>
                    </div>
                    <div className={'event'} >
                        <i className="fas fa-capsules"><span>2</span></i>
                    </div>
                    <div className={'event'} >
                        <i className="fa fa-envelope-o "><span>+20</span></i>
                    </div>
                    <div className={'event addFriends'} onClick={this.addFriend} >
                        <i className="fas fa-users "/>
                    </div>
                </div>
                <div className='header-mainPage'>
                    <div className={this.state.activeBar===this.myPageRef?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.myPageRef)} ref={this.myPageRef}>
                        <i className="fas fa-user-circle"/>
                        <span> من</span>
                    </div>
                    <div className={this.state.activeBar===this.reminderRef?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.reminderRef)} ref={this.reminderRef}>
                        <i className="fa fa-bell"/>
                        <span>یادآوری</span>
                    </div>
                    <div className={this.state.activeBar===this.doctorDocument?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.doctorDocument)} ref={this.doctorDocument}>
                        <i className="far fa-id-card"/><span>نوبت های من</span>
                    </div>
                    <div className={this.state.activeBar===this.doctorSearch?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.doctorSearch)} ref={this.doctorSearch}>
                        <i className="fa fa-user-md"/><span>جستجوی پزشک</span>
                    </div>
                    <div className={this.state.activeBar===this.apointment?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.apointment)} ref={this.apointment}>
                        <i className="fa fa-history"/><span>نوبت گیری</span>
                    </div>


                </div>
            {/*    end of bar */}
            {/*begin info container*/}
                <div className='container-info-mainPage'>
                    {showPage}

                </div>
            {/*end info container*/}
                <Sucses textInfo={this.state.showAlertSuccessText} className={this.state.showAlertSuccess?'show-alert ':' hide-alert '}/>

            </div>

        );
    }
}

export default  withRouter(ProfilePatient)