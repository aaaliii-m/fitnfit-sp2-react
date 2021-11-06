import React, { useState } from 'react';
import { FaCheck, FaEdit } from "react-icons/fa";

function CardBtn(props) {

    // let isComplete = false;
    let [isComplete, setIsComplete] = useState(false)

    const markComplete = (e) => {
        setIsComplete(true)
        e.target.innerHTML = '<span>Completed</span>'
    }

    return (
        <>
            <div className="row g-0 justify-content-end">
                <div className="col-5">
                    <div onClick={markComplete} id={props.id} className={isComplete ? 'bg-success text-center p-1' : "btn btn-outline-success w-100" }> <span className='m-1'><FaCheck /></span><p>Mark as Done!</p></div>
                </div>
            </div>
        </>
    )
}

export default CardBtn
