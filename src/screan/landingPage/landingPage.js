import React from "react";
import './homePage.css';
import './loginModal.css';
import IMG from '../../assets/image/log2.jpg'
import MouseDown from "../components/mouseScroll/mouseDown";
class LandingPage extends React.Component{


    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.doctorLogin = React.createRef();
        this.patientLogin = React.createRef();
        this.state={
            scroll:0,
            userName:"",
            password:"",

        };
    };

    //create toggle function for input modal
    toggleUserName=(userName)=>{
       this.setState({...this.state,userName:userName.target.value});
    };
    togglePassword=(password)=>{
        this.setState({...this.state,password:password.target.value});
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
    // componentDidMount() {
    //     window.addEventListener('scroll',this.onChangeHome)
    //
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.onChangeHome);
    // }
    scrollHandel=(e)=>{
        const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop;
// const scroll =window.pageYOffset;
        console.log(scrollY);
        if(scrollY>250){
            this.myRef.current.classList.add('show')
        }
        else {
            if(this.myRef.current.classList.contains('show')){
                this.myRef.current.classList.remove('show');
            }
        }
        this.setState({scroll:scrollY});
    };
    componentDidMount() {
        window.addEventListener('scroll',this.scrollHandel);
    }


    render() {
        const showLoginDoctor=<div className='login-modal doctor-login hide' ref={this.doctorLogin}>
            <div className='container-form'>
                <div onClick={this.onClickExitForm} className='exit-btn-form'>x</div>
                <div className='container-form-item'>
                    <h1>اینجا هم فرم قرار میگیره</h1>
                    <h1>اینجا هم فرم قرار میگیره</h1>
                    <h1>اینجا هم فرم قرار میگیره</h1>
                </div>

            </div>
        </div>;
        const showLoginPatient=<div className='login-modal patient-login hide' ref={this.patientLogin}>
            <div className='container-form'>
                <div onClick={this.onClickExitFormPatient} className='exit-btn-form'>x</div>
                <div className='container-form-item'>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={(e)=>this.toggleUserName(e)} value={this.state.userName}/>
                        <label htmlFor="name" className="form__label">نام کاربری</label>
                    </div>
                    <div className='items-form'>
                        <input type="password" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.value} onChange={(e)=>this.togglePassword(e)}/>
                        <label htmlFor="name" className="form__label">رمز عبور</label>
                    </div>
                    <button className='login-btn'>ورود</button>

                </div>

            </div>
        </div>;

        return (
            // <div className='container'     ref={this.myRef} onScroll={this.scrollHandel}>
            <div className='container'   onScroll={this.scrollHandel}>
                <MouseDown/>
                <div className='white-space'/>

                <div className='img-show container-items-show'  ref={this.myRef} >
                    <img src={IMG} alt="HomePage"/>
                    <h1>KOKO</h1>
                    <h1>some text</h1>
                    <div className='login-ways'>
                        <button className='doctor-btn' onClick={this.onClickDoctorBtn}>دکتر</button>
                        <button className='patient-btn' onClick={this.patientBtn}>بیمار</button>
                    </div>
                </div>
                {showLoginDoctor}
                {showLoginPatient}
            </div>
        );
    }


}

export default LandingPage;