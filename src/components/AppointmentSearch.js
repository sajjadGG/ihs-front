import React from "react";
import { render } from "react-dom";
import {Button, Container , Row , FormLabel} from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import "./componentStyle.css"

import { DatePicker } from "jalali-react-datepicker";

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    root: {
        color : theme.palette.primary.light
    }
  }));
  

class AppointmentSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            doctor : props.doctor? props.doctor : "john",
            user : props.user? props.user : "sara",
            start_time : props.start_time ? props.start_time : new Date(),
            end_time : props.end_time ? props.end_time : null
        }
    }


    StartTimeOnChange = (e) => {
      this.setState({start_time : e.value._d})
    }

    EndTimeOnChange = (e) => {
      this.setState({end_time : e.value._d})
    }

    componentDidMount(){
        let end = new Date(this.state.start_time)
        end.setDate(end.getDate() + 7)
        this.setState({"end_time" : end});

    }

    render(){
        return(
            <Container>
                <Row position="static">
                <FormLabel>تاریخ شروع</FormLabel>
                <DatePicker onClickSubmitButton = {this.StartTimeOnChange}/>
                <FormLabel>تاریخ پایان</FormLabel>
                <DatePicker onClickSubmitButton = {this.EndTimeOnChange}/>
                <Toolbar>
                <TextField label="تخصص"/>
                <TextField label="نام دکتر"/>
                <Button>Search</Button>
                </Toolbar>
                </Row>
                <Container>
                    
                </Container>
              </Container>
        )
    }
}



export default AppointmentSearch