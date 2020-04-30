import React from "react";
import CardDoctor from "../../screan/Doctor/DoctorCard/doctorCard";

class LsitCardDoctor extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items:[]
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.value !== props.value) {

            const {datas}=this.props;
            console.log('hiii',datas);
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            const newPost=[];
            console.log(this.props);
            this.props.datas.forEach((itm)=>{
                            console.log(itm);
                    newPost.push(
                        <div className="col-md-4" key={itm.userId}>
                    {/*<CardDoctor medicalCouncilId={itm.medicalCouncilId} name={itm.userfullname} key={itm.userId} id={itm.userId} avatar={itm.avatar} user={itm.user} speciality={itm.speciality}/>*/}
                    <CardDoctor name={itm.userfullname} avatar={itm.avatar} speciality={itm.speciality} user={itm.user} id={itm.userId}/>
                        </div>
                    )
                        });
            this.setState({
                items:newPost
            })
        }
    }

    render() {
    //     const array=[]
    //     const ListCard = ()=>{
    //        datas.forEach((itm)=>{
    //             console.log(itm);
    //             this.setState({
    //                 items:[this.state.items,(<CardDoctor title={itm.title}/>)]
    //             })
    //         });
    //
    //     }
    // console.log('hi',datas);
        return(
            <div className='row'>
                {this.state.items}
            </div>
        );
    }
    }


export default LsitCardDoctor;