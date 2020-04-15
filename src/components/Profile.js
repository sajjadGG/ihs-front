import React from "react";
import { render } from "react-dom";
import {Card , ListGroup , Badge} from 'react-bootstrap'  
import ProfilePic from '../img/profilepic2.jpg'
import "./componentStyle.css"

class CustomProfile extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        avatar : props.avater ? props.avatar :ProfilePic,
        username : props.username ? props.username : "ali77",
        name: props.name ? props.name : "ali rezai",
        speciality : props.speciality ? props.speciality : "Cardiology",
        medId : props.medId ? props.medId : "97981213",
        
      }
    }
    render() {
      return(
        <div>
            <Card className="mycard">
            <Card.Img variant="top" src={this.state.avatar} />
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.state.speciality}</Card.Subtitle>
            <ListGroup variant="flush">
                <Badge variant="primary"> @ {this.state.username}</Badge>{' '}
                <Badge variant="success"> {this.state.medId}</Badge>{' '}
            </ListGroup>
            </Card>
        </div>
      );
    }
  }

  export default CustomProfile;