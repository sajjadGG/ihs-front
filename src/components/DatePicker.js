import moment from "moment";
import React, { useState } from "react";


import { DatePicker } from "jalali-react-datepicker";
// const handle = (e) => {console.log(e.value._d)}
export function datePicker(props){
  return(<DatePicker onClickSubmitButton = {props.handle}/>)
}