import React from "react";
import './infoStyle.css';
const WrongInfo=(props)=>{

    const {textInfo,className} = props;

    return(
        <div className={'info-wrong-alert info-alert ' + className}>
            <div className='left-side-alert wrong-alert'>
                <div className='symbol-alert'><i className="fa fa-exclamation-circle"/></div>
            </div>
            <div className='info-text-alert'>{textInfo}</div>
        </div>
    )
};
export default WrongInfo;