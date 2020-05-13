import React from "react";
import './AddClinic.css';

const AddClinic=(props)=>{
  const {clinics,addClick}=props;

  return(
      <div className='container-add-clinic'>
            {/*clinic cards*/}

            <input placeholder='name of clinic' className='clinic-name-input'/>
          <div className='btn-add-clinic' onClick={addClick}>+</div>
      </div>
  );
};

export default AddClinic;