import React from "react";
import { render } from "react-dom";

import {getAppointment} from '../api/apiFunction'
import "./componentStyle.css"

import ChatBot from 'react-simple-chatbot';

export class AppointmentList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            appointmets : [],
            doctor : undefined,
            speciality : undefined,
            starttime : new Date(),
            endtime : undefined

        }
    }

    async componentDidMount(){
        this.setState({
            appointments : 
            await getAppointment(
                {doctor:this.state.doctor,speciality:this.state.speciality,
                    startTime:this.state.starttime.toISOString(),endTime:this.state.endtime}
                    )
                })
    }

    render(){
        const appointments = this.state['appointmets'].map(a => <div>a</div>)
        return(
            appointments
        )
    }
}


export function MyChatBot(props){
    return(
        <ChatBot
            steps={[
            {
                id: '1',
                message: `${props.name ? props.name : "" } Welcome to IHS What can I do for you`,
                trigger: '2',
            },
            {
                id: '2',
                options: [
                { value: 1, label: 'Set an appointment', trigger: '4' },
                { value: 2, label: 'Number 2', trigger: '3' },
                { value: 3, label: 'Number 3', trigger: '3' },
                ],
            },
            {
                id: '3',
                message: 'Wrong answer, try again.',
                trigger: '2',
            },
            {
                id: '4',
                component : <AppointmentList/>,
                waitAction : true,
                trigger : '1'
            },
            ]}
        />
    )
}