import React,{Component} from "react";
import AvatarImage100 from "../../../functions/returnElement/returnAvatarPic100";

class ListFriendsProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            friends:[],
            qmsg:false,
            to:""
        }
    }
    showQuickMsg=(name)=>{
        console.log(name);
       this.setState({...this.state, to :name,qmsg:!this.state.qmsg});
        this.props.onclick(name,true)
    };

    setItems=async (input)=>{
        const list =[];
        input.forEach((itm)=>{
        list.push(
            <div className="on-ct" onClick={()=>this.showQuickMsg(itm.follower)} >
            <span onClick={()=>this.showQuickMsg(itm.follower)}>
                <AvatarImage100 name={itm.follower} h='50px'/></span>
        </div>)
        });
        this.setState({...this.state,friends:list});
    };
    nothing=()=>{
        const  list=[];
        list.push(
            <div className="on-ct">
                <div className='nothing-show'>
                    <i className='fas fa-low-vision'/>

                </div>
            </div>
        );
        this.setState({...this.state,friends :list});
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps!==this.props){
            if(this.props.friends.length>0){
                this.setItems(this.props.friends);
            }
            else if(this.props.friends.length===0){
                this.nothing();
            }
        }

    }

    render() {
        return(
            <div id="cts">

                {this.state.friends}

            </div>

        );
    }
}

export default ListFriendsProfile;