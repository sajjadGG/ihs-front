import React,{Component} from "react";
import DoctorCard from "../../Doctor/DoctorCard/doctorCard";
class ListDoctorCard extends Component{
    constructor(props) {
        super(props);
        this.state={
            items:[]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            const newPost=[];
            console.log('this.props');
            console.log(this.props);
            this.props.datas.forEach((itm)=>{
                console.log(itm);
                newPost.push(
                    <div className="" key={itm.userId}>
                        <DoctorCard  name={itm.userfullname} avatar={itm.avatar} speciality={itm.speciality}/>
                        {/*<DoctorCard medicalCouncilId={itm.medicalCouncilId} name={itm.userfullname} key={itm.userId} id={itm.userId} avatar={itm.avatar} user={itm.user} speciality={itm.speciality}/>*/}
                    </div>
                )
            });
            this.setState({
                items:newPost
            })
        }
    }

    render() {
        return (
            <div  className='container-list-doctor-card'>
                {this.state.items}
            </div>
        );
    }
}

export default ListDoctorCard;