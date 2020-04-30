import React from "react";
import './profilePageStyle.css';
import Avatar from '../../../assets/image/profile.png'
import {withRouter} from "react-router-dom";
import Sucses from "../../components/infoComponent/sucses";
import {getUserData} from "../../../functions/saveDataLocalStorage/localStorageFunction";
class ProfilePatient extends React.Component{
    constructor(props) {
        super(props);
        this.myPageRef = React.createRef();
        this.reminderRef = React.createRef();
        this.doctorDocument = React.createRef();
        this.doctorSearch = React.createRef();
        this.editProfileInfo = React.createRef();
        this.state={
            activeBar:this.myPageRef,
            editableMyPage:false,
            myPageName:"",
            showAlertSuccess:false,
            showAlertSuccessText:"",
        };
    }
    changeActiveBar=(refInput)=> {
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
        console.log(dataUser);
        this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:" سلام "+dataUser.full_name+" "});
        setTimeout(()=>{
            this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:''});
        },2500);
    };


    componentDidMount () {
     this.getData();
    };

    render() {
        //create page under bar
        const myPageInfo=
            <div className='my-page-info container-info-patient'>
                <div className='avatar-profile'>
                    <img src={Avatar} alt='avatar' className='avatar'/>
                    <i className="material-icons editable fas fa-pen" onClick={this.toggleEditableMyPage}/>
                </div>
                <input type='text' placeholder='سید رضا موسویان' className={!this.state.editableMyPage?"fixed":""} onChange={(name)=>this.toggleNameMyPage(name)} value={this.state.myPageName}/>
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
            <div className='doctor-document-info container-info-patient'>
            <div className='doctorDocumen-page-info profile-items'>

            <div className='nothing-show'>
                <i className='fas fa-low-vision'/>
                <h1>
                موردی یافت نشد
                </h1>
            </div>
            </div>
        </div>;

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
                </div>
                <div className='header-mainPage'>
                    <div className={this.state.activeBar===this.myPageRef?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.myPageRef)} ref={this.myPageRef}>
                        <i className="fas fa-user-circle"><span>صفحه من</span></i>
                    </div>
                    <div className={this.state.activeBar===this.reminderRef?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.reminderRef)} ref={this.reminderRef}>
                        <i className="fa fa-bell"><span>یادآوری</span></i>
                    </div>
                    <div className={this.state.activeBar===this.doctorDocument?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.doctorDocument)} ref={this.doctorDocument}>
                        <i className="far fa-id-card"><span>پرونده پزشکی</span></i>
                    </div>
                    <div className={this.state.activeBar===this.doctorSearch?'items-header-mainPage active-item':'items-header-mainPage'} onClick={()=>this.changeActiveBar(this.doctorSearch)} ref={this.doctorSearch}>
                        <i className="fa fa-user-md"><span>جستو جوی پزشک</span></i>
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