import React from "react";
import './profilePageStyle.css';
import Avatar from '../../../assets/image/profile.png'
class ProfilePatient extends React.Component{
    constructor(props) {
        super(props);
        this.myPageRef = React.createRef();
        this.reminderRef = React.createRef();
        this.doctorDocument = React.createRef();
        this.editProfileInfo = React.createRef();
        this.state={
            activeBar:this.myPageRef,
            editableMyPage:false,
            myPageName:"",
        };
    }
    changeActiveBar=(refInput)=> {
        console.log(refInput);
        console.log(this.state);
        if (refInput !== this.state.activeBar) {
            this.setState({ activeBar: refInput});
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




    render() {
        //create page under bar
        const myPageInfo=
            <div className='my-page-info container-info-patient'>
                <div className='test'>
                    <img src={Avatar} alt='avatar' className='avatar'/>
                    <i className="material-icons editable fas fa-pen" onClick={this.toggleEditableMyPage}/>
                </div>
                <input type='text' placeholder='سید رضا موسویان' className={!this.state.editableMyPage?"fixed":""} onChange={(name)=>this.toggleNameMyPage(name)} value={this.state.myPageName}/>
            </div>;
        const reminderPage= <div className='reminder-page-info'>

        </div>;

        //todo:check it if is not empty
        const doctorDocument = <div className='doctor-document-info container-info-patient'>
            <div className='nothing-show'>
                <i className='fas fa-low-vision'/>
                <h1>
                موردی یافت نشد
                </h1>
            </div>
        </div>;

        let showPage;
        if (this.state.activeBar ===this.myPageRef){
            showPage = myPageInfo;
        }
        else if(this.state.activeBar ===this.reminderRef){

        }
        else if(this.state.activeBar ===this.doctorDocument){
        showPage=doctorDocument;
        }
        return (
            <div className='container-mainPage'>
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
            {/*    end of bar */}
            {/*begin info container*/}
                <div className='container-info-mainPage'>
                    {showPage}
                </div>
            {/*end info container*/}
            </div>

        );
    }
}

export default  ProfilePatient