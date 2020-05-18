//todo: insert function for search
import React from "react";
import {Button, Container , Row , FormLabel} from 'react-bootstrap'
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

import "./componentStyle.css"

import { DatePicker } from "jalali-react-datepicker";
import {getAppointment} from "../api/apiFunction";
import SideUp from "../screan/components/sideUp/sideUp";
import SideBar from "../screan/sideBar/sideBard";
import Card from "../screan/components/Card/Card"

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
            doctor : props.doctor? props.doctor : "",
            user : props.user? props.user : "",
            start_time : props.start_time ? props.start_time : new Date(),
            end_time : props.end_time ? props.end_time : null,
            records : [],
            showMessage:false,
            doctorName:"",
        }
    }
    //searchForDaReserve
    searchForDaReserve=async ()=>{
        const data=await getAppointment({doctor:this.state.doctor});
        this.setState({records : data})
    };
    //toggleState
    toggleState=(input)=>{
      this.setState(input);
    };


    StartTimeOnChange = (e) => {
      this.setState({start_time : e.value._d})
    };

    EndTimeOnChange = (e) => {
      this.setState({end_time : e.value._d})
    };

    componentDidMount(){
        let end = new Date(this.state.start_time);
        end.setDate(end.getDate() + 7);
        this.setState({"end_time" : end});

    }
    searchApoinment=async ()=> {

        const data=await getAppointment({doctor:this.state.doctor,speciality:this.state.user,startTime:this.state.start_time.toISOString(),endTime:this.state.end_time.toISOString()});
        this.setState({records : data})
    };

    closef=()=>{
        this.setState({...this.state,showMessage:false});
    };
    render(){
        // const listItems = this.state.records.map((element) =>
        // <Container>
        //     <Row>
        //     <FormLabel>{element.id}</FormLabel>
        //     <FormLabel>{element.doctorUsername}</FormLabel>
        //     <FormLabel>{element.doctorSpeciality}</FormLabel>
        //     <FormLabel>{element.start_time}</FormLabel>
        //     <Button>رزرو</Button>
        //     </Row>
        //     <Divider />
        //     </Container>
        //           );


        const listItems = this.state.records.map((element) =>
        <Card name = {element.doctorUsername} des={`${element.clinic.address}\n$` } buttonText="reserve"/>
);


const calender =
    <Container>
    <Row position="static">
        <FormLabel>تاریخ شروع</FormLabel>
        <DatePicker onClickSubmitButton = {this.StartTimeOnChange}/>
    </Row>
        <Row>
        <FormLabel>تاریخ پایان</FormLabel>
        <DatePicker onClickSubmitButton = {this.EndTimeOnChange}/>
        <Toolbar>
            <div className='flex-column'>
                <TextField label="تخصص" onChange={()=>null}/>

                <TextField label="نام دکتر" onChange={(e)=>this.toggleState({...this.state,doctorName: e.target.value})} value={this.state.doctorName}/>
                <Button onClick={this.searchApoinment}>search</Button>
            </div>

            <div className='hide-btn' ><Button onClick={this.searchApoinment}>Search</Button>
            </div>
        </Toolbar>
    </Row>

    
</Container>

        return(
            <Container>
                <SideBar/>
                <div className='main-part-serach-friend flex-column'>
                    <div className='searchbar-container'>
                        <input className='search-input search-doctor-input' value={this.state.doctorName} onChange={(e)=>this.toggleState({...this.state,doctorName:e.target.value})} placeholder='Enter Doctor Name'/>
                        <i className='fa fa-search' onClick={this.searchForDaReserve}/>
                        <button onClick={()=>
                            this.setState({...this.state,showMessage:!this.state.showMessage})} style={{margin : '10px'}}>more</button>
                    </div>

                </div>
                <div className='overflow-hidden'>
                <SideUp show={this.state.showMessage} to={'rez'} onClick={this.closef} child={calender}/>

                </div>
                <Container>
                    {listItems}
                </Container>
            </Container>
        )
    }
}
export default AppointmentSearch