import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//added for import the styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux' ;
import Reducer from './reducer/reducer';
import {combineReducers, createStore} from "redux";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import SearchDoctorPages from "./PatientPages/serachDoctor/searchDoctorPages";
import DoctorPage from "./doctorPage/doctorPage";
import CustomNavbar from "./components/Navbar";
import MessageRoom from "./components/MessageRoom";
import AppointmentHistory from "./PatientPages/AppointmentHistory"
import './style.css'


const store = createStore(combineReducers(Reducer));

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
            <CustomNavbar/>
            <Route exact path='/' component={App}/>
            <Route exact path='/searchDoctor' component={SearchDoctorPages}/>
            <Route exact path='/doctorPage/:id' component={DoctorPage}/>
            <Route exact path='/message/:sender/:receiver' component={MessageRoom}/>
            <Route exact path='/app'> <AppointmentHistory records = {[{Num:'1', Docter:'محمد', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'انجام شده'},{Num:'1', Docter:'رضا', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'نا موفق'},{Num:'1', Docter:'حسن', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'رزرو شده'},{Num:'1', Docter:'غلام', Proficiency:'اعصاب' ,AppDate:'۹۹/۱۰/۱۰' ,AppState:'نا مشخص'}]} /></Route>
        </BrowserRouter>
        {/*<App/>*/}
      </Provider>,
  document.getElementById('root')
);