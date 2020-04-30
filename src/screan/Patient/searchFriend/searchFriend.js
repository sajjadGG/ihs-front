import React , {Component} from "react";
import './searchFriendsStyle.css';
import {getFrindes, searchUser} from "../../../api/apiFunction";
import ListAddedFriendCard from "./listAddedFriendCard";
import {getUserData} from "../../../functions/saveDataLocalStorage/localStorageFunction";
import ListSearchedFriendComponent from "./listSearchedFriendComponent";

class SearchFriend extends Component{
    constructor(props) {
        super(props);
        this.state={
            searchTermBarValue:"",
            listFriends:[],
            searched:[],
        }
    }
    toggleSearchInput=(input)=>{
      this.setState({...this.state,searchTermBarValue:input.target.value});
    };
    //searchFriend
    searchFriend=async ()=>{
    const data =await searchUser({id:this.state.searchTermBarValue});

    this.setState({...this.state,searched:data})
    console.log("this stae",data)
    };
    listFriends=async ()=>{
        const {username} = await getUserData();
        const datas=await getFrindes({followe:username});
        this.setState({...this.state,listFriends:datas});
        console.log('state',this.state)
    };
    componentDidMount() {
        this.listFriends();
    }

    render() {
        return(
            <div className='container-search-friend'>
               <div className='main-part-serach-friend'>
                   <div className='searchbar-container'>
                       <input className='search-input' value={this.state.searchTermBarValue} onChange={this.toggleSearchInput}/>
                       <i className='fa fa-search' onClick={this.searchFriend}/>
                   </div>
                   <div className='container-searched-friend'>

                       <ListSearchedFriendComponent datas={this.state.searched}/>
                   </div>
               </div>
                <div className='friends-added'>
                    <ListAddedFriendCard friends={this.state.listFriends}/>
                </div>
            </div>
        )
    }
}

export default SearchFriend;