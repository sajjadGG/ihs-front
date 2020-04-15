import React from "react";
import { render } from "react-dom";

import {Navbar,Button,Nav,Form ,FormControl} from 'react-bootstrap'  

export default function CustomNavbar(){
return (
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/SearchDoctor">Profile</Nav.Link>
</Nav>
</Navbar>);
}