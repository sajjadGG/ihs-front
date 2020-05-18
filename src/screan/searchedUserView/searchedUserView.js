import React from "react";
import './searchedUserStyle.css'
import Alerts from "../components/alerts/alerts";
class SearchedUserView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            alert:null,
        }
    }

    follow=()=>{
        const alert=<Alerts alert='wr'/>;
        this.setState({...this.state,alert:alert});
        setTimeout(()=>{
            this.setState({...this.state,alert:null});
        },2800)
    };
    render() {

        return(
            <div className="content-profile-page">
                <header>

                </header>
                <div className="profile-user-page cardSearch">
                    <div className="img-user-profile">
                        <div className="profile-bgHome"/>
                        <img className="avatar" src="http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200"
                             alt="jofpin"/>
                    </div>
                    <button onClick={this.follow}>Follow</button>
                    <div className="user-profile-data">
                        <h1>Jose Pino</h1>
                        <p>tozihat</p>
                    </div>
                    <div className="description-profile">Front-end | Security Researcher | CSS Warrior | <a
                        href="https://twitter.com/bullgit" title="bullgit"><strong>@bullgit</strong></a> | I love to
                        create small things for the internet!
                    </div>
                    <ul className="data-user">
                        <li><a><strong>3390</strong><span>Posts</span></a></li>
                        <li><a><strong>718</strong><span>Followers</span></a></li>
                        <li><a><strong>239</strong><span>Following</span></a></li>
                    </ul>
                </div>

                {this.state.alert}

            </div>

        )
    }
}

export default SearchedUserView;