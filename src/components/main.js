import React from 'react';
// import { useHistory } from 'react-router';
import Sidebar from './sidebar';
import './index.css';
import Card from './card';
import { useSelector } from "react-redux";
import AddTaskReducer from '../reducers/addTaskReducer';
import Header from './header';

function Main() {
    const list = useSelector( (data) => data.AddTaskReducer.list);
    // let history = useHistory()

    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Header></Header>
                <div className="row card-wrapper">
                    {list.length >0 ? <Card /> : <p className="text-white text-center mt-5">Nothing To Show</p> }
                </div>
            </div>
            
        </>
    )
}

export default Main
