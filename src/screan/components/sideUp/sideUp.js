import React from 'react';
import './pickCalender.css';
import {Container} from "react-bootstrap";

const SideUp =(props)=> {


    const {to, from, avatar,onClick,child} = props;
    const modalRef = React.createRef();
    const closef=()=>{

        const elem = modalRef.current;
        elem.classList.remove('show-msg');
        onClick();
    };
    return (
        <div className={props.show?"modalq show-msg calender":"modalq calender"} ref={modalRef} >
            <div className="top-content">
                <div className="left-content">
                </div>
                <span className="close-icon" onClick={closef}>x</span>
                <div className='icon-calender'>
                    <i className="fa fa-calendar icon-calender" />

                </div>
            </div>

            <div className="bottom-content">
                <Container>
                    {child}

                </Container>
            </div>
        </div>
    );
};

export default SideUp;