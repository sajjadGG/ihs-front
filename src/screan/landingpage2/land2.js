import React,{Component, useState} from "react";
import Carousel  from 'react-bootstrap/Carousel'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import {withRouter} from "react-router-dom";
import med1 from "./med1.jpg"
import med2 from "./med22.jpg"
import med3 from "./med3.png"
import med4 from "./med4.png"
import title from "./title.png"
import {signUp,login} from '../../api/apiFunction';
import {setLoginData} from '../../functions/saveDataLocalStorage/localStorageFunction';
import CreateAcc from "./CreateAcc"
import PatientL from "./PatienL"
import DoctorL from "./DoctorL"


import './loginM.css'
import './land2Style.css'
import SideBar from "../sideBar/sideBard";

class Land2 extends Component{

  constructor(props) {
    super(props);
    this.state={
            className: "none",
            show_login: false

    };
};


showLogin=()=>{
  this.setState({className:"l_show"})
  this.setState({show_login:true})
}

hidelogin=()=>{
  this.setState({className:"l_hide"})
  this.setState({show_login:false})
}
    







render(){



  const Login=
  <div className= {this.state.className}>
<Tabs  onSelect={(index, label) => console.log(label + ' selected')}>
    <Tab  label="Patient">
      {<PatientL/>}
    </Tab>
<Tab  label="CreateAccount" >{<CreateAcc history={this.props.history}/>}</Tab>
<Tab  label="Doctor" >{<DoctorL history={this.props.history}/>}</Tab>
</Tabs>
  </div>
  ;






return(
    <div className = "container-fluid main">
        <div className= "col-md-12 Headder"><h1 style={{float:"left" , margin:"10px 0 0 2%"}}>koko</h1>
          <div className="login" >
          
            <a className="btn btn-1" onClick={this.state.show_login?this.hidelogin:this.showLogin}>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        Login
                    </a></div>{Login}
                    </div>
                   
                    <div className="slider" ><Carousel className="slider2">
  <Carousel.Item className="s_item">
    <img
      className="d-block w-100"
      src={med1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="s_item">
    <img
      className="d-block w-100"
      src={med2}
      alt="Third slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="s_item">
    <img
      className="d-block w-100"
      src={med3}
      alt="Third slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="s_item">
    <img
      className="d-block w-100"
      src={med4}
      alt="4 slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
<div className = "header2 container-fluid">
  <div className="row">
  <a className="col-md-3 header_a" href="#">News<p className="header_p">news</p></a>
  <a className="col-md-3 header_a" href="#">Intruduction<p className="header_p">Intruduction</p></a>
  <a className="col-md-3 header_a" href="#">suggestion<p className="header_p">suggestion</p></a>
  <a className="col-md-3 header_a" href="#">Applications<p className="header_p">Applications</p></a></div>
</div>
<div>
<div className="webLable"></div>
<img className ="title" src={title}/>
    </div>
    </div>


    );

}
}

export default withRouter(Land2);