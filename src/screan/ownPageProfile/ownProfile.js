import React,{Component} from "react";

import './ownProfileStyle.css'
import SideBar from "../sideBar/sideBard";
import AvatarImage from "../../functions/returnElement/returnAvatarPic";
import {getUserData, getAppData} from "../../functions/saveDataLocalStorage/localStorageFunction";
import {getMyAppointment} from "../../api/apiFunction";
import {withRouter} from "react-router-dom";
import ListFriendsProfile from "../components/listFriendProfile/listFriendsProfile";
import QuicMessage from "../components/quickMessage/quickMessage";
import {updateDataUser , putuserData} from "../../api/apiFunction";
import SideUp from "../components/sideUp/sideUp";
import Cldr, {Clrd} from "../Calendar/Cldr"

class OwnProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            avatar:"",
            active:"timeline",
            showMessage:false,
            to:'',
            changeInfo:false,
            di:true,
            age:19,
            dec:'',
            test:false,
            username:""
        }
        let History=null;
    };
    test1=()=>{
        console.log(this.state)
        this.setState({...this.state,test:!this.state.test});
    };
    getData=async ()=>{
        const data =await getUserData();
        console.log(data)
        if(data){
            this.setState({...this.state,name:data.full_name,avatar:data.avatar,username:data.username});
        }
    };
    getApp=()=>{
        const data1 = getAppData();
        console.log(data1)
        return data1
    }
    componentDidMount() {
        this.getData();
        this.getApp()
    }
    toggleActive=(input)=>{
        this.setState({...this.state,active:input})

        if(input==="history"){
            this.History = <div className="history">{<Cldr day= {this.getApp()}/>} </div>
        }
        else{
            this.History = null
        }
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
        console.log(username)
        const data= await putuserData({first_name:this.state.name.split(" ")[0],last_name : this.state.name.split(" ")[1] ,username:username});


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
                    <button className={!this.state.di?"btn-send show-btn":"btn-send hide-btn"} onClick={this.updateData}>send</button>
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
                                            <div className={this.state.active==='timeline'?"td active":"td"} onClick={()=>this.toggleActive('timeline')}><i
                                                className="material-icons">av_timer</i><span>TIMELINE</span></div>
                                            <div className={this.state.active==='people'?"td active":"td"} onClick={()=>this.toggleActive('people')}><i
                                                className="material-icons">people</i><span>FRIENDS</span></div>
                                            <div className={this.state.active==='photo'?"td active":"td"} onClick={()=>this.toggleActive('photo')}><i
                                                className="material-icons">photo</i><span>PHOTOS</span></div>
                                            <div className={this.state.active==='about'?"td active":"td"} onClick={()=>this.toggleActive('about')}><i
                                                className="material-icons">explore</i><span>ABOUT</span></div>
                                            <div className={this.state.active==='archive'?"td active":"td"} onClick={()=>this.toggleActive('archive')}><i
                                                className="material-icons">archive</i><span>ARCHIVE</span></div>
                                                <div className={this.state.active==='history'?"td active":"td"} onClick={()=>this.toggleActive('history')}><i
                                                 class="far fa-calendar-check material-icons"></i><span>HISTORY</span></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {this.History}
                            <div className="m-mrg" id="composer">
                                <div id="c-tabs-cvr">
                                    <div className="tb" id="c-tabs">
                                        <div className={"td "+this.state.active==='timeline'?"active":""}><i className="material-icons">subject</i><span>Make Post</span>
                                        </div>
                                        <div className="td"><i
                                            className="material-icons">camera_enhance</i><span>Photo/Video</span></div>
                                        <div className="td"><i
                                            className="material-icons">videocam</i><span>Live Video</span></div>
                                        <div className="td"><i
                                            className="material-icons">event</i><span>Life Event</span></div>
                                    </div>
                                </div>
                                <div id="c-c-main">
                                    <div className="tb">
                                        <div className="td" id="p-c-i"><img
                                            src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"
                                            alt="Profile pic"/></div>
                                        <div className="td" id="c-inp">
                                            <input type="text" placeholder="What's on your mind?"/>
                                        </div>
                                    </div>
                                    <div id="insert_emoji"><i className="material-icons">insert_emoticon</i></div>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="td" id="r-col">
                            <div id="chat-bar">
                                <div id="chat-lb"><i className="material-icons" onClick={this.test1}>contacts</i><span>Friends</span></div>
                                  <ListFriendsProfile friends={JSON.parse(localStorage.getItem('userData')).follower} onclick={this.showqmsg}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <QuicMessage show={this.state.showMessage} to={this.state.to} onClick={this.closef} sender = {this.state.username} />

                </div>

            </main>
            </div>

        );

    }
}

export default withRouter(OwnProfile);