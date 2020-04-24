import React, { useState } from "react";
import { render } from "react-dom";
import "./componentStyle.css"
import avatar from './avatar.png'

import {Navbar,Button,Nav,Form ,FormControl,NavDropdown} from 'react-bootstrap'  

export default function CustomNavbar(){
  const [navDS , setnavDS]= useState(false);
  let navD = null;
if(navDS){
  navD = 
  <div>
  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item></div>
}
else{
  navD = null;
}

return (
<Navbar bg="dark" variant="dark">
<NavDropdown title={
  <Navbar.Brand>
<img
        src={localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).avatar : avatar}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="a"
      />
  {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : "KOKO"}</Navbar.Brand>}
   onMouseOver = {()=> setnavDS(true)}>

  {navD}
  </NavDropdown>
<Nav className="mr-auto">
  <Nav.Link className="nav" href="/">Home</Nav.Link>
  <Nav.Link className="nav" href="/SearchDoctor">Profile</Nav.Link>
</Nav>
</Navbar>);
}