import React,{Component} from "react";
import Card from "../../components/Card/Card";
// import AddedFriendCard from "./addedFriendComponentCard";
class ListAddedFriendCard extends Component{
    constructor(props) {
        super(props);
        this.state={
            showFriends:[],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
        console.log(this.props);
        const listFriend=[];
        const {friends} =this.props;
        friends.forEach((item)=>{
             listFriend.push(
                 // <div className='container-avatar-friends'> <AddedFriendCard name={item.followee}/></div>)
                 <div className='container-avatar-friends'>
                     <Card name={"reza"} des={"afhsdhjd"} avatar={null}/>
                 </div>)

        });
        this.setState({...this.state,showFriends:listFriend});
        }
    }


    render() {
        return(
            <div style={{hheight:"100%"}}>
                {this.state.showFriends}
            </div>
        )
    }
}

export default ListAddedFriendCard;