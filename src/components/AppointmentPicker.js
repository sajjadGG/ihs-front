import React from "react";
import { render } from "react-dom";
import {Button, Container , Row} from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import "./componentStyle.css"

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
  }));
  
function DateAndTimePickers(props) {
    const classes = useStyles();
  
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={props.handleChange}
        />
      </form>
    );
  }


class AppointmentPicker extends React.Component{
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
      this.setState({start_time : e.target.value})
    }

    EndTimeOnChange = (e) => {
      this.setState({end_time : e.target.value})
    }

    componentDidMount(){
        let end = new Date(this.state.start_time)
        end.setDate(end.getDate() + 7)
        this.setState({"end_time" : end});

    }

    render(){

        return(
          <Container>
            <Row>
              <DateAndTimePickers handleChange={this.StartTimeOnChange}/>
              <DateAndTimePickers handleChange={this.EndTimeOnChange}/>
              <Button>Search</Button>
            </Row>
            <Container>
              
            </Container>
          </Container>
        )
    }
}



export default AppointmentPicker