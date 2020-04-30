import React, { useState } from "react";
import { render } from "react-dom";
import "./componentStyle.css"
import avatar from './avatar.png'

import {Navbar,Button,Nav,Form ,FormControl,NavDropdown} from 'react-bootstrap'  

export default function CustomNavbar(){
  const [navDS , setNavDS]= useState(false);
  let navD = null;
if(navDS){
  navD = 
  <div className="Drop" onMouseLeave={()=> setNavDS(false)}>
  <a className="DropD" href="#action/3.1">Action</a>
  <a className="DropD" href="#action/3.2">Another action</a>
  <a className="DropD" href="#action/3.3">Something</a></div>
}
else{
  navD = null;
}

return (
  <div>
<Navbar bg="dark" variant="dark" style={{ zIndex:"2",marginBottom:"0px"}}>
<Navbar.Brand onMouseOver={()=> setNavDS(true)} >
<img
        src={localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).avatar : avatar}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="a"
      />
  {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : "KOKO"}<i className={navDS?"fas fa-angle-up":"fas fa-angle-down"} style={{marginLeft:"10px"}}></i></Navbar.Brand>
  
<Nav className="mr-auto">
  <Nav.Link className="nav" href="/">Home</Nav.Link>
  <Nav.Link className="nav" href="/SearchDoctor">Profile</Nav.Link>
</Nav>
</Navbar>
{navD}
</div>);
}