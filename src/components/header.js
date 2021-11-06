import React from "react";
import { FaRunning, FaCheck, FaEdit } from "react-icons/fa";
import { useHistory } from 'react-router';

const Header = () => {

    const history = useHistory()

    return (

        <>

            <div className="addTask-wrapper">
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="addTask-title">
                            <h3>
                                <q>
                                    What seems impossible today will one day become your warm-up
                                </q>
                            </h3>
                        </div>
                    </div>
                    <div className='col-auto mt-5'>
                        <button onClick={ () => history.push('./addNewTask')} className="btn btn-warning px-5">Add Task</button>
                    </div>
                </div>
            </div>

        </>

    );

};

export default Header;