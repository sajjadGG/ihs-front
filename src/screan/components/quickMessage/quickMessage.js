import React from 'react';
import './quickmsgStyle.css';
import AvatarImage from "../../../functions/returnElement/returnAvatarPic";

const QuicMessage =(props)=> {

    const {to, from, avatar,onClick} = props;
    const modalRef = React.createRef();
const closef=()=>{

   const elem = modalRef.current;
elem.classList.remove('show-msg');
    onClick();
};
    return (
        <div className={props.show?"modalq show-msg":"modalq"} ref={modalRef} >
            <div className="top-content">
                <div className="left-content">
                    <AvatarImage name={to} avatar={avatar} />
                </div>
                <span className="close-icon" onClick={closef}>x</span>
                <div className="icon-cammera">cammera</div>
            </div>

            <div className="bottom-content">
                <div className="text">Quick Message</div>
                <input type='text'/>
                <button className="send-btn">Send</button>
            </div>

        </div>
    );
};

export default QuicMessage;