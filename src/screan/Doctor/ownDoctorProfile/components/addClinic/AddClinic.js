import React from "react";
import './AddClinic.css';

const AddClinic=(props)=>{
  const {clinics}=props;

  return(
      <div className='container-add-clinic'>

          <div className='btn-add-clinic'>+</div>
      </div>
  );
};

export default AddClinic;