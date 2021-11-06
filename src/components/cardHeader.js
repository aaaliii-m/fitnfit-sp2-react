import React from 'react';
import { FaRunning, FaEdit } from "react-icons/fa";

function CardHeader() {
    return (
        <>
            <div className="row g-0 justify-content-between">
                <div className="col-7">
                    <h3 className="card-title">Running <span className='m-1'><FaRunning/></span></h3>
                </div>
                <div className="col-3 text-end btn-edit-task">
                    <a>Edit Task <i className="m-1"><FaEdit /></i></a>
                </div>
            </div>
        </>
    )
}

export default CardHeader
