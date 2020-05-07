import React from "react";
import './homePage.css';
import './loginModal.css';
import './createAccountStyle.css'
import MouseDown from "../components/mouseScroll/mouseDown";
import {signUp,login} from '../../api/apiFunction';
import {setLoginData} from '../../functions/saveDataLocalStorage/localStorageFunction';
import WrongInfo from "../components/infoComponent/wrongInfo";
import { withRouter } from "react-router-dom";
import baner from '../../assets/image/baner.jpg';
import infodoctor from '../../assets/image/DForm.jpg';
import infoPatient from '../../assets/image/PForm2.jpg';
import drug from '../../assets/image/drug-1674890.png';
import medical from '../../assets/image/flat-5051465.png';
import doctorintro from '../../assets/image/medical-5047582.png';

import {Button } from 'react-bootstrap'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

class LandingPage extends React.Component{


    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.doctorLogin = React.createRef();
        this.patientLogin = React.createRef();
        this.container= React.createRef();
        this.state={
            createAccount:false,
            scroll:0,
            userName:"",
            password:"",
            userNameDoctor:"",
            passwordDoctor:"",

        //  todo:check it,
            showAlertWrong:false,
            showAlertWrongText:"",
                namecreate:"",
                lastnamecreate:"",
                passwordcreate:"",
                usercreate:"",
                emailcreate:"",
                userType:""

        };
    };

    togglenameCreate=(name)=>{
        this.setState({...this.state,namecreate:name.target.value})
    };
    togglelastNameCreate=(lastname)=>{
        this.setState({...this.state,lastnamecreate:lastname.target.value})
    };
    togglepassword=(password)=>{
        this.setState({...this.state,passwordcreate:password.target.value});
    };
    toggleuser=(user)=>{
        this.setState({...this.state,usercreate:user.target.value});
    };
    toggleemail=(email)=>{
        this.setState({...this.state,emailcreate:email.target.value});
    };
    toggleUserType = (ut)=>{
        //console.log(ut.target.checked)
        this.setState({...this.setState,userType:ut.target.checked?'doctor':'patient'})
    };
    //create toggle function for input modal
    toggleUserName=(userName)=>{
       this.setState({...this.state,userName:userName.target.value});
    };
    toggleUserNameDoctor=(userName)=>{
       this.setState({...this.state,userNameDoctor:userName.target.value});
    };
    togglePassword=(password)=>{
        this.setState({...this.state,password:password.target.value});
    };
    togglePasswordDoctor=(password)=>{
        this.setState({...this.state,passwordDoctor:password.target.value});
    };
    toggleLoginBtn= async ()=>{
        const dataLogin = await login({username:this.state.userName,password:this.state.password});
       // console.log('dataLogin');
        console.log(dataLogin);
        if(dataLogin.token){
            // this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:`${dataLogin.user.full_name} سلام `});
            await setLoginData(dataLogin);
            if(dataLogin.type==="patient"){
                this.props.history.push("/profielpatient");
            }
            // setTimeout(()=>{
            //     this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:""});
            //
            // },2500);
        }
        else {
            this.setState({...this.state,showAlertWrong:!this.state.showAlertWrong,showAlertWrongText:`خطا`});
            setTimeout(()=>{
                this.setState({...this.state,showAlertWrong:!this.state.showAlertWrong,showAlertWrongText:""});
            },2500);
        }


    };
    toggleLoginBtnCreate= async ()=>{
        const dataCreate = await signUp({firstName:this.state.namecreate,lastName:this.state.lastnamecreate,username:this.state.usercreate,password:this.state.passwordcreate,email:this.state.emailcreate , userType : this.state.userType});
       // console.log('dataLogin');
       const dataLogin = await login({username:this.state.usercreate,password:this.state.passwordcreate});
        console.log(dataLogin);
        if(dataLogin.token){
            // this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:`${dataLogin.user.full_name} سلام `});
            await setLoginData(dataLogin);
            if(dataLogin.type==="patient"){
                this.props.history.push("/profielpatient");
            }
            else if (dataLogin.type==="doctor"){
                this.props.history.push("/profieldoctor");
            }
            // setTimeout(()=>{
            //     this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:""});
            //
            // },2500);
        }
        else {
            this.setState({...this.state,showAlertWrong:!this.state.showAlertWrong,showAlertWrongText:`خطا`});
            setTimeout(()=>{
                this.setState({...this.state,showAlertWrong:!this.state.showAlertWrong,showAlertWrongText:""});
            },2500);
        }


    };
     toggleLoginBtnDoctor= async ()=>{
        const dataLogin = await login({username:this.state.userNameDoctor,password:this.state.passwordDoctor});
       // console.log('dataLogin');
        console.log(dataLogin);
        if(dataLogin.token){
            // this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:`${dataLogin.user.full_name} سلام `});
            await setLoginData(dataLogin);
            if(dataLogin.type==="doctor"){
                //todo:redirect in doctor page
                this.props.history.push("/profielpatient");
            }
            // setTimeout(()=>{
            //     this.setState({...this.state,showAlertSuccess:!this.state.showAlertSuccess,showAlertSuccessText:""});
            //
            // },2500);
        }
        else {
            this.setState({...this.state,showAlertWrong:!this.state.showAlertWrong,showAlertWrongText:`خطا`});
            setTimeout(()=>{
                this.setState({...this.state,showAlertWrong:!this.state.showAlertWrong,showAlertWrongText:""});
            },2500);
        }


    };

    onClickDoctorBtn=()=>{
        const modalDoctorLogin = this.doctorLogin.current.classList;
        if(modalDoctorLogin.contains('show')){
            modalDoctorLogin.remove('show');
            modalDoctorLogin.add('hide');
        }
        else {
            modalDoctorLogin.remove('hide');
            modalDoctorLogin.add('show');
        }

    };
    patientBtn=()=>{
        const modalDoctorLogin = this.patientLogin.current.classList;
        if(modalDoctorLogin.contains('show')){
            modalDoctorLogin.remove('show');
            modalDoctorLogin.add('hide');
        }
        else {
            modalDoctorLogin.remove('hide');
            modalDoctorLogin.add('show');
        }

    };

    onClickExitForm=()=>{
        const modalExit = this.doctorLogin.current.classList;
        modalExit.remove('show');
        modalExit.add('hide');

    };
    onClickExitFormPatient=()=>{
        const modalExit =  this.patientLogin.current.classList;
        modalExit.remove('show');
        modalExit.add('hide');

    };
    exitCreate=()=>{
 this.setState({...this.state,createAccount:!this.state.createAccount})

    };

    //create account
    createAccount=()=>{
        console.log(this.state)
        this.setState({...this.state,createAccount:!this.state.createAccount});
    };
//     scrollHandel=()=>{
//         const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
//         // const scrollTop = this.myRef.current.scrollTop;
// // const scroll =window.pageYOffset;
//         console.log(scrollY);
//         if(scrollY>350&&this.myRef.current){
//             this.myRef.current.classList.add('show')
//         }
//         else {
//             if(this.myRef.current.classList.contains('show')){
//                 this.myRef.current.classList.remove('show');
//             }
//         }
//         this.setState({scroll:scrollY});
//     };
    componentDidMount() {
        // window.addEventListener('scroll',this.scrollHandel);
    }
    componentWillUnmount(){
        // window.removeEventListener('scroll',this.scrollHandel);

    }


    render() {

        const showLoginDoctor=
            <div className='login-modal doctor-login hide' ref={this.doctorLogin}>
            <div className='container-form'>
                <div className='bg bgd'/>
                <div onClick={this.onClickExitForm} className='exit-btn-form'>x</div>
                <div className='container-form-item'>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={(e)=>this.toggleUserNameDoctor(e)} value={this.state.userNameDoctor}/>
                        <label htmlFor="name" className="form__label">نام کاربری</label>
                    </div>
                    <div className='items-form'>
                        <input type="password" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.passwordDoctor} onChange={(e)=>this.togglePasswordDoctor(e)}/>
                        <label htmlFor="name" className="form__label">رمز عبور</label>
                    </div>
                    <button className='login-btn' onClick={this.toggleLoginBtnDoctor}>ورود</button>

                </div>

            </div>
        </div>;

        const showLoginPatient=<div className='login-modal patient-login hide' ref={this.patientLogin}>
            <div className='container-form'>
                <div className='bg bgp'/>

                <div onClick={this.onClickExitFormPatient} className='exit-btn-form'>x</div>
                <div className='container-form-item'>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={(e)=>this.toggleUserName(e)} value={this.state.userName}/>
                        <label htmlFor="name" className="form__label">نام کاربری</label>
                    </div>
                    <div className='items-form'>
                        <input type="password" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.password} onChange={(e)=>this.togglePassword(e)}/>
                        <label htmlFor="name" className="form__label">رمز عبور</label>
                    </div>
                    <button className='login-btn' onClick={this.toggleLoginBtn}>ورود</button>

                </div>

            </div>
        </div>;
        const createAccount=<div className={this.state.createAccount?'create-account-container  show-create':'create-account-container hide-create'} >
            <div className='container-form-create'>

                <h2>ساخت حساب</h2>
                <div onClick={this.exitCreate} className='exit-btn-form'>x</div>
                <div className='container-form-item'>

                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.namecreate} onChange={this.togglenameCreate}/>
                        <label htmlFor="name" className="form__label">نام </label>
                    </div>
                    <div className='items-form'>
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.lastnamecreate} onChange={this.togglelastNameCreate}/>
                    <label htmlFor="name" className="form__label">نام خانوادگی</label>
                </div>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.emailcreate} onChange={this.toggleemail}/>
                        <label htmlFor="name" className="form__label">ایمیل </label>
                    </div>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.usercreate} onChange={this.toggleuser}/>
                        <label htmlFor="name" className="form__label">نام کاربری </label>
                    </div>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.passwordcreate} onChange={this.togglepassword}/>
                        <label htmlFor="name" className="form__label"> رمز عبور </label>
                    </div>
                    <div>
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>بیمار</Grid>
                        <Grid item>
                            <Switch  onChange={this.toggleUserType} name="checkedC" />
                        </Grid>
                        <Grid item>دکتر</Grid>
                        </Grid>
                    </div>
                    <button className='login-btn' onClick={this.toggleLoginBtnCreate}>ساخت حساب</button>

                </div>

            </div>
        </div>;

        return (
            // <div className='container'     ref={this.myRef} onScroll={this.scrollHandel}>
            <div className='container'   onScroll={this.scrollHandel} ref={this.container}>
                <div className='baner'>
                    <img src={baner} alt='baner'/>
                </div>
                <div className='info-landing'>
                    <h1>koko</h1>
                    <h2>همه برای همه </h2>
                    <h3>همه با هم </h3>
                </div>

                <div className='white-space1'/>

                <MouseDown/>
                <div className='white-space'/>

                {/*intro*/}
                <div className='container-intro'>
                    <div className='intro-info'>
                        <div className='icon-intro'>
                            <img src={medical} alt='intro'/>
                        </div>
                        <div className='intro-text'>
                            <span>نوبت گیری</span>
                        </div>
                    </div>
                    <div className='intro-info'>
                        <div className='icon-intro'>
                            <img src={doctorintro} alt='intro'/>
                        </div>
                        <div className='intro-text'>
                            <span>ارتباط با دکتر</span>
                        </div>
                    </div>
                    <div className='intro-info'>
                        <div className='icon-intro'>
                            <img src={drug} alt='intro'/>
                        </div>
                        <div className='intro-text'>
                            <span>یادآوری دارو</span>
                        </div>
                    </div>
                </div>
                {/*end intro*/}
                <div className='doctor-login-container info-login-container'>
                    <div className='info-doctor-login'>
                        <img src={infodoctor} alt='doctorLogin'/>
                    </div>
                    <div className='container-info-login-text doctor-login-text'>
                        <p>هر پزشک میتواند با داشتن حساب کاربری خود برنامه روزانه خود رو مدیریت کند.</p>
                    </div>
                    {/*<button className='' onClick={this.onClickDoctorBtn}>دکتر</button>*/}
                    {/*<a href="https://twitter.com/Dave_Conner" className="doctor-btn btn btn-5" onClick={this.onClickDoctorBtn}>Hover1</a>*/}
                    <a className="doctor-btn btn btn-1" onClick={this.onClickDoctorBtn}>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        ورود دکتر
                    </a>

                </div>
                 <div className='patient-login-container info-login-container '>
                    <div className='info-doctor-login'>
                        <img src={infoPatient} alt='patientLogin'/>
                    </div>
                    <div className='container-info-login-text doctor-login-text'>
                        <p>هر پزشک میتواند با داشتن حساب کاربری خود برنامه روزانه خود رو مدیریت کند.</p>
                    </div>
                     {/*<button className='patient-btn' onClick={this.patientBtn}>بیمار</button>*/}
                    <a className="doctor-btn btn btn-1" onClick={this.patientBtn}>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        ورود بیمار
                    </a>

                </div>

                {/*<div className='img-show container-items-show'  ref={this.myRef} >*/}
                {/*    <img src={IMG} alt="HomePage"/>*/}
                {/*</div>*/}
                <Button onClick={this.createAccount}>ساخت حساب</Button>
                {createAccount}
                {showLoginDoctor}
                {showLoginPatient}


            </div>
        );
    }


}

export default withRouter(LandingPage);