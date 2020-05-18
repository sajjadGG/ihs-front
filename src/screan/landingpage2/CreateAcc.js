import React,{Component, useState} from "react";
import {signUp,login} from '../../api/apiFunction';
import {setLoginData} from '../../functions/saveDataLocalStorage/localStorageFunction';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';





class CreateAcc extends Component{
   constructor(props){
       super(props)
    this.state={
        createAccount:false,
            namecreate:"",
            lastnamecreate:"",
            passwordcreate:"",
            usercreate:"",
            emailcreate:"",
            userType:"patinet",
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
  btnMouseOver = ()=>{
    if(this.state.passwordcreate.length <= 3){
      this.ErrorPass = <div style={{color:"rgb(255, 159, 159)", marginLeft:"10%"}}>Passwords must be at least 4 characters</div>
      
    }
    else{
      this.ErrorPass = null
    }
    this.setState({aa:!this.state.aa})
   }
  toggleLoginBtnCreate= async ()=>{
    if(this.state.passwordcreate.length <= 3){
        this.ErrorPass = <div style={{color:"rgb(255, 159, 159)", marginLeft:"10%"}}>Passwords must be at least 4 characters</div>
        
      }
      else{
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
    }}


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
    

    render(){
    return(<div>
        <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.namecreate} onChange={this.togglenameCreate}/>
                        <label htmlFor="name" className="form__label">Name</label>
                    </div>
                    <div className='items-form'>
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.lastnamecreate} onChange={this.togglelastNameCreate}/>
                    <label htmlFor="name" className="form__label">LastName</label>
                </div>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.emailcreate} onChange={this.toggleemail}/>
                        <label htmlFor="name" className="form__label">Email</label>
                    </div>
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.usercreate} onChange={this.toggleuser}/>
                        <label htmlFor="name" className="form__label">UserName</label>
                    </div>
                    <div className='items-form'>
                        <input type={this.state.type} className="form__field" placeholder="Name" name="name" id='name' required value={this.state.passwordcreate} onChange={this.togglepassword}/>
                        <label htmlFor="name" className="form__label">Password</label><i class={this.state.classN} onMouseDown={this.eyefun} onMouseUp={this.eyefun}></i>
                    </div>{this.ErrorPass}
                    <div className="CheckUser">
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>بیمار</Grid>
                        <Grid item>
                            <Switch  onChange={this.toggleUserType} name="checkedC" />
                        </Grid>
                        <Grid item>دکتر</Grid>
                        </Grid>
                    </div>
                    <div className="btn1"><button className="btn" onClick={this.toggleLoginBtnCreate} onMouseOver={this.btnMouseOver}>ساخت حساب</button></div></div>
    );
}
}

export default CreateAcc;