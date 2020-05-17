import React from "react";
import { render } from "react-dom";
import {getMessage , postMessage} from '../api/apiFunction';
import {Helper} from "../api/urlApi"
import CustomMessage from './Message'

import "./componentStyle.css"


import {InputGroup , FormControl , Button , Container ,Row} from 'react-bootstrap'



const chatSocket = new WebSocket('ws://localhost:8000/ws/chat/sara/john/?token=' + localStorage.getItem('token'))


class CustomMessageRoom extends React.Component {



    
    constructor(props) {
        super(props);
    
        this.state = {
          //avatar : props.avater ? props.avatar :ProfilePic,
          sender : props.sender ? props.sender : "sara",
          receiver : props.receiver ? props.receiver : 'john',
          messageList: props.text ? props.text : [],
          colorSender:props.colorSender ? props.colorSender : "green",
          colorReceiver:props.colorReceiver ? props.colorReceiver : "blue",
          time : 1,
          messageText : ""
        }


      }


    async componentDidMount(){
        console.log("look here")

        chatSocket.onopen = () => console.log("connected")

        chatSocket.onmessage = (e) =>{
            const data = JSON.parse(e.data);
            console.log("data is")
            console.log(data)
            console.log(this.state)
            this.setState({messageList : [...this.state.messageList , data['message']]})
        }

        chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };

    }


    onChangeMessage(message){
        console.log(message.target.value);
        this.setState({
            messageText:message.target.value,
        })
    };

    // async onClick(e){
    //    await postMessage({sender:this.state.sender , receiver : this.state.receiver, text : this.state.messageText});
    // }
    onClick(e){
        chatSocket.send(JSON.stringify({
            'message': this.state.messageText
        }));
    }
    
      render(){
    
        const listItems = this.state.messageList.map((message) =>
        <Row>
        <CustomMessage sender={message.senderUsername} text={message.text} time={message.time_updated}/>
        </Row>);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onClick = this.onClick.bind(this)
        return(
            <Container>
                <Row > 
                    <Container>
                        {listItems}
                    </Container>
                </Row>
                <Row className="row message-box">
                <InputGroup>
                    <InputGroup.Prepend>
                        <Button variant="primary" onClick = {this.onClick}>Primary </Button>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" onChange={this.onChangeMessage}/>
                </InputGroup>
                </Row>
            </Container>
        )


      }



}


export default CustomMessageRoom