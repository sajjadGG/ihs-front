import React,{Component, useState} from "react";
import {signUp,login} from '../../api/apiFunction';
import {setLoginData} from '../../functions/saveDataLocalStorage/localStorageFunction';
import {withRouter} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import {
    createStyles,
    fade,
    Theme,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';





  const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
          color: 'yellow',
        },
        '& label':{
            color:"white"
            
        },
        '& input':{
            
            
            color:"white"
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'yellow',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
              display:"flex",
            width:"80%",
              marginBottom:"10px",
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'yellow',
          },
        },
      },
  })(TextField);




class PatientL extends Component{
   constructor(props){
       super(props)
    this.state={
        createAccount:false,
        userName:"",
        password:"",


    };
   }
toggleUserName=(userName)=>{
    console.log(userName.target.value)
    this.setState({...this.state,userName:userName.target.value});
 };

 togglePassword=(password)=>{
     this.setState({...this.state,password:password.target.value});
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


};
    

    render(){
    return(


        <div className="form-main">
            
                    <div className='items-form'>
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={(e)=>this.toggleUserName(e)} value={this.state.userName}/>
                        <label htmlFor="name" className="form__label">UserName</label>
                    </div>
                    <div className='items-form'>
                        <input type="password" className="form__field" placeholder="Name" name="name" id='name' required value={this.state.password} onChange={(e)=>this.togglePassword(e)}/>
                        <label htmlFor="name" className="form__label">Password</label>
                    </div>
                    <div className="btn1"><button className='btn btn-primary' onClick={this.toggleLoginBtn}>ورود</button></div>

        </div>
    );
}
}

export default withRouter(PatientL);