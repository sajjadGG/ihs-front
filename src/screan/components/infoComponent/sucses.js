import React from "react";
import './infoStyle.css';
const Sucses = (props)=>{
    const {textInfo,className} = props;
        return(
            <div className={'info-sucese-alert info-alert '+className}>
                <div className='left-side-alert'>
                    <div className='symbol-alert'><i class="fa fa-check-circle"></i></div>
                </div>
                <div className='info-text-alert'>{textInfo}</div>
            </div>
        );



};


export default Sucses;