import React from "react";
import { render } from "react-dom";
import {Toast} from 'react-bootstrap'

import "./componentStyle.css"


class CustomMessage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          //avatar : props.avater ? props.avatar :ProfilePic,
          sender : props.sender ? props.sender : "ali77",
          text: props.text ? props.text : "hi",
          color:props.color ? props.color : "green",
          time:props.time ? props.time : "11",
          user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : "sara" ,
          appList : props.appList ? props.appList : []
        }


      }

      render(){
        return(
            <Toast>
            <Toast.Header className={this.state.sender == this.state.user ? "toast-sender" : "toast-receiver"}>
            <strong className="mr-auto">{this.state.sender}</strong>
            <small>{this.state.time} mins ago</small>
            </Toast.Header>
            <Toast.Body>{this.state.text}</Toast.Body>
        </Toast>
        )
      }


}

export default CustomMessage