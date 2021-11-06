import React from "react";
import { FaRunning, FaCheck, FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import AddTaskReducer from "../reducers/addTaskReducer";
import CardBtn from "./cardBtn";
import CardHeader from "./cardHeader";


const Card = () => {

    const list = useSelector( (data) => data.AddTaskReducer.list)
    return(
        <>
        {
        list.map( (elem) => {
            return (
                    <div className="card col-lg-5 shadow-lg">
                        <div className="card-body">
                            <CardHeader></CardHeader>
                            <div className="row g-0 mb-3">
                                <div className="col-4 card-list-items">
                                    <ul className="user-constants">
                                        <li>ID:</li>
                                        <li>Name:</li>
                                        <li>Description:</li>
                                        <li>Activity Type:</li>
                                        <li>Duration:</li>
                                        <li>Date:</li>
                                    </ul>
                                </div>
                                <div className="col-8 card-list-items">
                                    
                                    <ul>
                                        <li key={`key01-${elem.Id}`}>{elem.Id}</li>
                                        <li key={`key02-${elem.Id}`}>{elem.Name}</li>
                                        <li key={`key03-${elem.Id}`}>{elem.Description}</li>
                                        <li key={`key04-${elem.Id}`}><FaRunning /> Running</li>
                                        <li key={`key05-${elem.Id}`}>15 Minutes</li>
                                        <li key={`key06-${elem.Id}`}>{elem.Task_Date}</li>
                                    </ul>
                                </div>
                            </div>
                            <CardBtn id={elem.Id}></CardBtn>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
}

export default Card;