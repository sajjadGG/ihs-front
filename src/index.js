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
import './style.css'
import AppointmentPicker from "./components/AppointmentPicker"
import {SimpleMap} from "./components/LocationPicker"

const store = createStore(combineReducers(Reducer));

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
            <CustomNavbar/>
            <Route exact path='/' component={App}/>
            <Route exact path='/searchDoctor' component={SearchDoctorPages}/>
            <Route exact path='/doctorPage/:id' component={DoctorPage}/>
            <Route exact path='/message/:sender/:receiver' component={MessageRoom}/>
            <Route exact path='/test' component={SimpleMap}/>
        </BrowserRouter>
        {/*<App/>*/}
      </Provider>,
  document.getElementById('root')
);