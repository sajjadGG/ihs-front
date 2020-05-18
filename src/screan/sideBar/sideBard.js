import React from 'react';
import './sideBarStyle.css';

const SideBar=(props)=>{
    return(
    <div>
        <div className="area"></div>
        <nav className="main-menu">
            <ul>
                <li className="has-subnav">
                    <a href="/profielpatient">
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Profile
                        </span>
                    </a>

                </li>
                <li className="has-subnav">
                    <a href="/date">
                        <i className="fa fa-list fa-2x"></i>
                        <span className="nav-text">
                            Appointment
                        </span>
                    </a>

                </li>
            </ul>

            <ul className="logout">
                <li>
                    <a href="/">
                        <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default SideBar;