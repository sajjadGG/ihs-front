import React,{Component} from "react";
import './ownProfileStyle.css'
import {getUserData} from "../../../../functions/saveDataLocalStorage/localStorageFunction";
import {updateDataUser} from "../../../../api/apiFunction";
import SideBar from "../../../sideBar/sideBard";
import AvatarImage from "../../../../functions/returnElement/returnAvatarPic";
import ListFriendsProfile from "../../../components/listFriendProfile/listFriendsProfile";
import QuicMessage from "../../../components/quickMessage/quickMessage";
import MyPatientsList from "../components/MyPatients/MyPatientsList";
import MyReservedList from "../components/Reserved/MyReservedList";
import AddClinic from "../components/addClinic/AddClinic";


class OwnProfileDoctor extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            avatar:"",
            active:"people",
            showMessage:false,
            to:'',
            changeInfo:false,
            di:true,
            age:19,
            dec:'',
            test:false,
            showClinicInput:false,
            myPatient:<MyPatientsList listPatients={[{name:"reza",date:"1398/01/02",time:"20:45",prescription:"hfsdsdhfsdk"},{name:"reza",date:"1398/01/02",time:"3:10",prescription:"hfsdsdhfsdk"}]}/>,
            addClinic:<AddClinic addClick={this.addClickClinic}/>,
            reserved:<MyReservedList listPatients={[{name:"reza",date:"1398/01/02",time:"20:45" ,clinic:"test"},{name:"reza",date:"1398/01/02",time:"3:10",clinic: "tes22"}]} />,
            activeBar:<MyPatientsList listPatients={[{name:"reza",date:"1398/01/02",time:"20:45" ,clinic:"test"},{name:"reza",date:"1398/01/02",time:"3:10",clinic: "tes22"}]} />
        }
    };

    addClickClinic=()=>{
    //    todo:ad function for post clinic
    };
    test1=()=>{
        this.setState({...this.state,test:!this.state.test});
    };
    getData=async ()=>{
        const data =await getUserData();
        if(data){
            this.setState({...this.state,name:data.full_name,avatar:data.avatar});
        }
    };
    componentDidMount() {
        this.getData();
    }
    toggleActive=(input,show)=>{
        this.setState({...this.state,active:input,activeBar:show})
    };
    changePage=(input)=>{
        this.props.history.push(input)
    };

    showqmsg=(input,checkstae)=>{
    this.setState({...this.state,to : input ,showMessage:checkstae});
    };
    closef=()=>{
        this.setState({...this.state,showMessage:false});
    };

    changeInfo=()=>{
        this.setState({...this.state,di:!this.state.di});

    };
    toggleInput(obj){

        console.log("sdfs",obj)
      this.setState(obj);
    };
    updateData=async ()=>{
        const {username}=await getUserData();

        const req= updateDataUser({fullname:"rezx",user:username});
        req.then((data)=>{
        }).catch((e)=>console.error(e));

    };
    render() {

        const temp=[
            {name:"reza"},
            {name:"sajjad"},
        ];
        const showFixed=
            <div>
            <div className="cnt-label">
                <i className="l-i" id="l-i-i"></i>
                <span>Intro</span>
                <div className="lb-action"><i className="material-icons" onClick={this.changeInfo}>edit</i></div>
            </div>
            <div id="i-box">
                <div className='container-intro'>
                <label>FullName</label>
            <input  type='text' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,name:e.target.value})} value={this.state.name} />

            <label>Age</label>
            <input value={this.state.age}  min='18'  max='100' type='number' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,age:e.target.value})}/>

                </div>
                <div className='container-intro'>
                    <label>diseas history</label>
                    <input  type='text' disabled={true} className='items-intro'  />
                </div>
                <div className='container-intro'>
                    <label>description</label>
                    <textarea  type='text' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,dec:e.target.value})} value={this.state.dec} />
                </div>

                </div>
                <div className='container-intro'>
                    <button className={!this.state.di?"btn-send show-btn":"btn-send hide-btn"} onClick={this.updateData}>Edit</button>
                </div>
    </div>;


        return(
            <div className='container'>

            <main>
                <SideBar/>

                <header>
                    <div className="tb">
                        <div className="td" id="f-name-l"><span> </span></div>
                        <div className="td" id="i-links">
                            <div className="tb">
                                <div className="td" id="m-td">
                                    <div className="tb">
                                        <div className='row-reverse'>
                                            <span className="td" onClick={()=>this.changePage('/searchfriend')}><i className="material-icons">person_add</i></span>
                                            <span className="td" onClick={()=>this.changePage('/date')}><i className="fa fa-stethoscope"/></span>
                                            <span className="td"><i className="material-icons">chat_bubble</i></span>
                                            <span className="td m-active"><i
                                                className="material-icons" onClick={()=>this.changePage('/card')} >notifications</i></span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                <div id="profile-upper">
                    <div id="profile-banner-image">
                        <img src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg" alt="Banner image"/>
                    </div>
                    <div id="profile-d">
                        <div id="profile-pic">
                            <AvatarImage name={this.state.name} avatar={this.state.avatar}/>
                        </div>
                        <div id="u-name">{this.state.name?this.state.name:""}</div>
                        <div className="tb" id="m-btns">



                        </div>
                    </div>
                    <div id="black-grd"></div>
                </div>
                <div id="main-content">
                    <div className="tb">
                        <div className="td" id="l-col">
                            <div className="l-cnt">
                                {showFixed}
                            </div>
                            <div className="l-cnt l-mrg">
                                <div className="cnt-label">
                                    <i className="l-i" id="l-i-p"></i>
                                    <span>Photos</span>

                                </div>
                                <div id="photos">

                                </div>
                            </div>
                            <div className="l-cnt l-mrg">

                            </div>
                            <div id="t-box">

                            </div>
                        </div>
                        <div className="td" id="m-col">
                            <div className="m-mrg" id="p-tabs">
                                <div className="tb">
                                    <div className="td">
                                        <div className="tb" id="p-tabs-m">
                                            <div className={this.state.active==='timeline'?"td active":"td"} onClick={()=>this.toggleActive('timeline',this.state.reserved)}><i
                                                className="material-icons">av_timer</i><span>Reserved</span></div>
                                            <div className={this.state.active==='people'?"td active":"td"} onClick={()=>this.toggleActive('people',this.state.myPatient)}><i
                                                className="material-icons">people</i><span>My Patients</span></div>
                                            <div className={this.state.active==='photo'?"td active":"td"} onClick={()=>this.toggleActive('photo')}><i
                                                className="material-icons">photo</i><span>PHOTOS</span></div>

                                            <div className={this.state.active==='archive'?"td active":"td"} onClick={()=>this.toggleActive('archive')}><i
                                                className="material-icons">archive</i><span>ARCHIVE</span></div>

                                            <div className={this.state.active==='addclinic'?"td active":"td"} onClick={()=>this.toggleActive('addclinic',this.state.addClinic)}><i
                                                className="fa fa-h-square"/><span>َAdd clinic</span></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="post">
                                    {this.state.activeBar}
                                </div>
                            </div>
                        </div>
                        <div className="td" id="r-col">
                            <div id="chat-bar">
                                <div id="chat-lb"><i className="material-icons" onClick={this.test1}>contacts</i><span>Last Patients</span></div>
                                  <ListFriendsProfile friends={temp} onclick={this.showqmsg}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <QuicMessage show={this.state.showMessage} to={this.state.to} onClick={this.closef}/>

                </div>

            </main>
            </div>

        );

    }
}

export default (OwnProfileDoctor);