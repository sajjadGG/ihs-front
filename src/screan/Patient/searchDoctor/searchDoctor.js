import React,{Component} from "react";
import './searchDoctorStyle.css';
import axios from "axios";
import {Helper} from "../../../api/urlApi";
import {getToken, setLastSearchDoctorInfo} from "../../../functions/saveDataLocalStorage/localStorageFunction";
import ListDocotorSearch from "../../../PatientPages/serachDoctor/ListDocotorSearch";
class SearchDoctor extends Component{
    constructor(props) {
        super(props);
        this.state={
            searchTermBarValue:"",
            datas:null,
        }
    }
    clicksearch=async ()=>{
        const tokenApi = await getToken();
        // console.log(tokenApi);
        const doctorData = (await axios.get(Helper.searchDoctor + this.state.searchTermBarValue, {
            headers:{ 'Authorization': Helper.authtype + tokenApi},
        })).data;
        console.log(doctorData);
        await setLastSearchDoctorInfo(doctorData);
        this.setState({...this.state,datas:doctorData});
    };
    //toogle
    toggleSearchInput=(e)=>{
        this.setState({...this.state,searchTermBarValue:e.target.value});
    };
    render() {

        return (
            <div className='container-doctor-search'>
                <div className='searchbar-container'>
                    <input className='search-input' value={this.state.searchTermBarValue} onChange={this.toggleSearchInput}/>
                    <i className='fa fa-search' onClick={this.clicksearch}/>
                </div>
                <div className='container-list-doctor'>
                    {/*<ListDoctorCard datas={this.state.datas}/>*/}
                    <ListDocotorSearch datas={this.state.datas} />

                </div>
            </div>
        );
    }
};
export default SearchDoctor;