import React,{Component, useState} from "react";
import {signUp,login} from '../../api/apiFunction';
import {setLoginData} from '../../functions/saveDataLocalStorage/localStorageFunction';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';





class DoctorL extends Component{
   constructor(props){
       super(props)
    this.state={
        createAccount:false,
        userNameDoctor:"",
        passwordDoctor:"",
        type:"password",
        classN:"fas fa-eye",
        aa:false
};
let ErrorPass =null
let EyeState = false;
}
eyefun = ()=>{
 console.log(this.EyeState)
 if(this.EyeState===true){
 this.setState({...this.state,classN:"fas fa-eye" , type:"password"})
 }
 else{
 this.setState({...this.state,classN:"fas fa-eye-slash" , type:"input"})
}
this.EyeState = !this.EyeState;
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
 btnMouseOver = ()=>{
    if(this.state.passwordDoctor.length <= 3){
      this.ErrorPass = <div style={{color:"rgb(255, 159, 159)", marginLeft:"10%"}}>Passwords must be at least 4 characters</div>
      
    }
    else{
      this.ErrorPass = null
    }
    this.setState({aa:!this.state.aa})
   }

 toggleLoginBtnDoctor= async ()=>{
    if(this.state.passwordDoctor.length <= 3){
        this.ErrorPass = <div style={{color:"rgb(255, 159, 159)", marginLeft:"10%"}}>Passwords must be at least 4 characters</div>
        
      }
      else{
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
    }}
};
    

render(){
    return(

<div>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={(e)=>this.toggleUserNameDoctor(e)} value={this.state.userNameDoctor}/>
                        <label htmlFor="name" className="form__label">UserName</label>
                    </div>
                    <div className='items-form'>
                        <input type="password" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.passwordDoctor} onChange={(e)=>this.togglePasswordDoctor(e)}/>
                        <label htmlFor="name" className="form__label">Password</label><i class={this.state.classN} onMouseDown={this.eyefun} onMouseUp={this.eyefun}></i>
                    </div>{this.ErrorPass}
                    <div className="btn1"><button class="btn btn-primary" onClick={this.toggleLoginBtnDoctor} onMouseOver={this.btnMouseOver}>ورود</button></div>

                </div>

    );
}
}

export default DoctorL;