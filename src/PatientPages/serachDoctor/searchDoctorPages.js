import React,{Component} from "react";
import ListDocotorSearch from "./ListDocotorSearch";
import axios from "axios";
import SideProfile from "../profile/sideProfile";
import {connect} from "react-redux";
import {setToken, setUser} from "../../action";
import {withRouter} from "react-router-dom";
import {Helper} from "../../api/urlApi";

import "./searchDoctorStyle.css"

class SearchDoctorPages extends Component{
constructor(props) {
    super(props);
    this.state={
        datas:[],
        payload:false,
        searchTermBarValue:'',
    }
    this.onChangedSearchBar = this.onChangedSearchBar.bind(this);
    this.onKeyDownSearch = this.onKeyDownSearch.bind(this);
}
onChangedSearchBar (searchTerm) {
this.setState({
    searchTermBarValue:searchTerm.target.value,
})
}

async onKeyDownSearch(e){
    if(e.keyCode == 13){
        // console.log(typeof(this.getDoctorData))
        const tokenApi = this.props.token ? this.props.token : JSON.parse(localStorage.getItem('token'));
        const doctorData = (await axios.get(Helper.searchDoctor + this.state.searchTermBarValue, {
            headers:{ 'Authorization': Helper.authtype + tokenApi},
        })).data;
        localStorage.removeItem('doctors');
            localStorage.setItem('doctors',JSON.stringify(doctorData));
            this.setState({
                datas:doctorData,
            });
    }
}

    render() {
    const {token,user} = this.props;
        const getDoctorData=async ()=>{
            const tokenApi = token ? token : JSON.parse(localStorage.getItem('token'));
            console.log('hiii');
            console.log(JSON.parse(localStorage.getItem('token')));
            console.log(JSON.parse(localStorage.getItem('user')));
            // console.log('hi');
            // console.log(token);
            // console.log(user);
            console.log(this.state.searchTermBarValue);
            const doctorData = (await axios.get(Helper.searchDoctor + this.state.searchTermBarValue, {
                headers:{ 'Authorization': Helper.authtype + tokenApi},
            })).data;
            console.log('hiu');
            console.log(doctorData);
            localStorage.removeItem('doctors');
            localStorage.setItem('doctors',JSON.stringify(doctorData));
            this.setState({
                datas:doctorData,
            })
        }
const userData =(JSON.parse(localStorage.getItem('userData')));
        // console.log("hi beach",userData)
        return(
            <div className='row'>
                <div className='col-md-3'>
                    <SideProfile username={userData.user} avatar={'http://demo-ihs.herokuapp.com'+userData.avatar} fullname={userData.userfullname}/>
                </div>
                <div className='col-md-8' style={{margin:'0 auto'}}>
                <div class="d-flex justify-content-center" style={{marginBottom : "50px"}}>
                <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Search..." value={this.state.searchTermBarValue} onChange={this.onChangedSearchBar} onKeyDown={this.onKeyDownSearch}/>
                    <a href="#" class="search_icon" onClick={getDoctorData}><i class="fas fa-search"></i></a>
                </div>
                </div>
                <div className='row'>

                <ListDocotorSearch datas={this.state.datas} />
                </div>


            </div>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        user : state.user ,
        token : state.token ,
    }
};
export default connect(mapStateToProps , {setToken,setUser})(withRouter(SearchDoctorPages));
