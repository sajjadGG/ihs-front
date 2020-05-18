import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux' ;
import Reducer from './reducer/reducer';
import {combineReducers, createStore} from "redux";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import MessageRoom from "./components/MessageRoom";
import AppointmentHistory from "./PatientPages/AppointmentHistory"
import './style.css'
import SearchDoctor from "./screan/Patient/searchDoctor/searchDoctor";
import DoctorProfileFromPatient from "./screan/Doctor/DoctorProfileView/DoctorProfileFromPatient";
import SearchFriend from "./screan/Patient/searchFriend/searchFriend";
import SideBar from "./screan/sideBar/sideBard";


import AppointmentSearch from "./components/AppointmentSearch"
import {DoctorClinic} from "./doctorPage/doctorclinic"
import OwnProfile from "./screan/ownPageProfile/ownProfile";
import Card from "./screan/components/Card/Card";

import Cldr, {Clrd} from "./screan/Calendar/Cldr"

import SearchedUserView from "./screan/searchedUserView/searchedUserView";


// import LandingPage from "./screan/landingPage/landingPage"


import SearchedUserView from "./screan/searchedUserView/searchedUserView";


const store = createStore(combineReducers(Reducer));

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>

        <SideBar/>
            <Route exact path='/' component={App}/>
            {/*<Route exact path='/searchDoctor' component={SearchDoctorPages}/>*/}
            {/* <Route exact path='/2' component={LandingPage}/> */}

            <Route exact path='/' component={App}/>
            <Route exact path='/searchDoctor' component={SearchDoctor}/>
            <Route exact path='/searchfriend' component={SearchFriend}/>
            <Route exact path='/card' component={Card}/>
            <Route exact path='/clrd' component={()=><Cldr day= {{may8:'at 10:20pm with Dr Karimi' , may10:'at 9:35pm with Dr Rezayi'}}/>}/>
            <Route exact path='/doctorPage/:id' component={DoctorProfileFromPatient}/>
            <Route exact path='/test2' component={SearchedUserView}/>
            <Route exact path='/message/:sender/:receiver' component={MessageRoom}/>
            <Route exact path='/test' component={() => <DoctorClinic clinics={[{name : "شوش" , lng:23 , lat:12} , {name : "تهران پارس" , lng:23 , lat:12}]}/>}/>
            <Route exact path='/profielpatient' component={OwnProfile}/>
            <Route exact path='/date' component={AppointmentSearch}/>
            <Route exact path='/app'> <AppointmentHistory records = {[{Num:'1', Docter:'محمد', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'انجام شده'},{Num:'2', Docter:'رضا', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'نا موفق'},{Num:'3', Docter:'حسن', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'رزرو شده'},{Num:'4', Docter:'غلام', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'نا مشخص'}]} /></Route>
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);