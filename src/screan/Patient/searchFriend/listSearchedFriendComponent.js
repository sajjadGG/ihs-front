import React,{Component} from "react";
import SearchFriend from "./searchFriend";
import Searchedfriend from "./searchedFriendComponent";
import CardDoctor from "../../Doctor/DoctorCard/doctorCard";
import Card from "../../components/Card/Card";
class ListSearchedFriendComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps!=this.props){
        const searched =[];
        const {datas}= this.props;
        datas.forEach((item)=>{
            console.log("hi",item);
           searched.push(
               <div className="col-md-4">

               <Card name={item.userfullname} avatar={item.avatar} user={item.user} des="rezagsghg"/>
               </div>
               )
        });
        this.setState({...this.state,data:searched});
        }
    };

    render() {
        return(
            <div className='row'>
                {this.state.data}
            </div>
        )
    }
}
export default  ListSearchedFriendComponent;