import React from "react";
import { FaHome, FaTasks, FaHistory, FaCog, FaUserAlt, FaTimes } from "react-icons/fa";
import { useHistory } from 'react-router';


const Sidebar = () => {

    let history = useHistory()

    return(
        <>
            <div className="sidebar-wrapper">
                <div className="sidebar">
                    <div className="brand">
                        <span className="lab la-affiliatetheme"></span>
                        <h2>Fitin'fit</h2>
                        <div>
                            <label className="closebtn" for="hiddenToggleCheckBox" >
                                <span className="FaTimes"></span>
                            </label>
                        </div>
                    </div>
                    <div className="sidemenu">
                        <div className="side-user">
                            <div className="side-img">
                                <img src="./001-man.png" />
                            </div>
                            <div className="user">
                                <small>Trainer</small>
                                <p>Let's Start Training</p>
                            </div>
                        </div>

                        <ul>
                            <li>
                                <a onClick={ () => history.push('/main')} className="active text-decoration-none">
                                    <span><FaHome /></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-decoration-none">
                                    <span><FaTasks /></span>
                                    <span>Tasks</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="" className="text-decoration-none">
                                    <span><FaHistory /></span>
                                    <span>History</span>
                                </a>
                            </li> */}
                            <li>
                                <a href="" className="text-decoration-none">
                                    <span><FaCog /></span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => history.push('/')} className="text-decoration-none">
                                    <span><FaUserAlt/></span>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Sidebar;