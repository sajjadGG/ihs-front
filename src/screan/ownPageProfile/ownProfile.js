import React,{Component} from "react";

import './ownProfileStyle.css'
import SideBar from "../sideBar/sideBard";
import AvatarImage from "../../functions/returnElement/returnAvatarPic";
import {getUserData} from "../../functions/saveDataLocalStorage/localStorageFunction";
import {withRouter} from "react-router-dom";
class OwnProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            avatar:"",
            active:"timeline",
        }
    };
    getData=async ()=>{
        const data =await getUserData();
        console.log("hiii",data)
        if(data){
            this.setState({...this.state,name:data.full_name,avatar:data.avatar});
        }
    };
    componentDidMount() {
        this.getData();
    }
    toggleActive=(input)=>{
        this.setState({...this.state,active:input})
    };
    changePage=(input)=>{
        this.props.history.push(input)
    };

    render() {
        return(
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
                                <div className="cnt-label">
                                    <i className="l-i" id="l-i-i"></i>
                                    <span>Intro</span>
                                    <div className="lb-action"><i className="material-icons">edit</i></div>
                                </div>
                                <div id="i-box">
                                    <div id="intro-line">Web developer - UI</div>
                                    <div id="u-occ">Developing awesome UIs at <a href="#">Google LLC</a> Bengaluru and
                                        inspiring other companies to do so :)
                                    </div>
                                    <div id="u-loc"><i className="material-icons">location_on</i><a
                                        href="#">Bengaluru</a>, <a href="#">India</a></div>
                                </div>
                            </div>
                            <div className="l-cnt l-mrg">
                                <div className="cnt-label">
                                    <i className="l-i" id="l-i-p"></i>
                                    <span>Photos</span>

                                </div>
                                <div id="photos">
                                    <div className="tb">
                                        <div className="tr">
                                            <div className="td"></div>
                                            <div className="td"></div>
                                            <div className="td"></div>
                                        </div>
                                        <div className="tr">
                                            <div className="td"></div>
                                            <div className="td"></div>
                                            <div className="td"></div>
                                        </div>
                                        <div className="tr">
                                            <div className="td"></div>
                                            <div className="td"></div>
                                            <div className="td"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-cnt l-mrg">
                                <div className="cnt-label">
                                    <i className="l-i" id="l-i-k"></i>
                                    <span>Did You Know<i id="k-nm">1</i></span>
                                </div>
                                <div>
                                    <div className="q-ad-c">
                                        <a href="#" className="q-ad">
                                            <img src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png"/>
                                                <span>My favorite superhero is...</span>
                                        </a>
                                    </div>
                                    <div className="q-ad-c">
                                        <a href="#" className="q-ad" id="add_q">
                                            <i className="material-icons">add</i>
                                            <span>Add Answer</span>
                                        </a>
                                    </div>
                                </div>
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
                                        </div>
                                    </div>

                                </div>
                            </div>
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
                                <div className="post">
                                    <div className="tb">
                                        <a href="#" className="td p-p-pic"><img
                                            src="https://imagizer.imageshack.com/img923/2452/zifFKH.jpg"
                                            alt="Rajeev's profile pic"/></a>
                                        <div className="td p-r-hdr">
                                            <div className="p-u-info">
                                                <a href="#">Rajeev Singh</a> shared a memory with <a href="#">Himalaya
                                                Singh</a>
                                            </div>
                                            <div className="p-dt">
                                                <i className="material-icons">calendar_today</i>
                                                <span>January 28, 2015</span>
                                            </div>
                                        </div>
                                        <div className="td p-opt"><i className="material-icons">keyboard_arrow_down</i>
                                        </div>
                                    </div>
                                    <a href="#" className="p-cnt-v">
                                        <img src="https://imagizer.imageshack.com/img923/8568/6LwtUa.jpg"/>
                                    </a>
                                    <div>
                                        <div className="p-acts">
                                            <div className="p-act like"><i
                                                className="material-icons">thumb_up_alt</i><span>25</span></div>
                                            <div className="p-act comment"><i
                                                className="material-icons">comment</i><span>1</span></div>
                                            <div className="p-act share"><i className="material-icons">reply</i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="td" id="r-col">
                            <div id="chat-bar">
                                <div id="chat-lb"><i className="material-icons">contacts</i><span>Friends</span></div>
                                <div id="cts">
                                    <div className="on-ct active">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
                                    </div>
                                    <div className="on-ct active">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png"/></a>
                                    </div>
                                    <div className="on-ct">
                                        <a href="#"><img
                                            src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
                                    </div>
                                    <div className="on-ct active">
                                        <a href="#"><img
                                            src="https://imagizer.imageshack.com/img923/332/1abR4H.png"/></a>
                                    </div>
                                    <div className="on-ct active">
                                        <a href="#"><img
                                            src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
                                    </div>
                                    <div className="on-ct">
                                        <a href="#"><img
                                            src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg"/></a>
                                    </div>
                                    <div className="on-ct">
                                        <a href="#"><img
                                            src="https://imagizer.imageshack.com/img923/332/1abR4H.png"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );

    }
}

export default withRouter(OwnProfile);