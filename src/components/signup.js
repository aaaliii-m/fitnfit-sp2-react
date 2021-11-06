import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { AddUser } from "../actions/login";



function Signup() {

    const dispatch = useDispatch();

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    const setInputs1 = (e) => {
        return setUserName(e.target.value)
    }

    const setInputs2 = (e) => {
        return setPassword(e.target.value)
    }

    let history = useHistory();

    let [isSignup, setIsSignup] = useState(false);

    const singupEventHandler = () => {
            dispatch(AddUser(userName, password));
            setIsSignup(true);
    }

    console.log(isSignup)

    return (
        <>
            <div class="login-backdrop"></div>
            <div class="container container-props">
                <div class="row no-gutters justify-content-center">
                    <div class="col col-sm-8 col-md-6 col-lg-4 align-self-start form-col-props-signup">
                        <h1 class="brand-icon text-center mb-5">fitin'fit</h1>
                        <div class="login-form">
                            <div class="form-group text-white">
                                <label for="signup-email" class="sr-only">Email Address</label>
                                <input type="email" id="signup-email" class="form-control mb-4 login-input-props" placeholder="Email" value={userName} onChange={setInputs1} />
                                <label for="signup-password" class="sr-only">Password</label>
                                <input type="password" id="signup-password" class="form-control mb-4 login-input-props" placeholder="Password" value={password} onChange={setInputs2} />
                                <label for="signup-password-confirm" class="sr-only">Confirm Password</label>
                                <input type="password" id="signup-password-confirm" class="form-control mb-5 login-input-props" placeholder="Confirm Password" />
                            </div>
                            <button class="btn login-btn-props" onClick={ singupEventHandler }>sign up</button>
                        </div>
                        <div class="links">
                            <span onClick={ () => history.push('/')} class="signup-link">Sign in</span>
                        </div>
                    </div>
                </div>

                {/* alert Message */}
                <div class={ isSignup ? "alert alert-success alert-dismissible fade show" : "d-none" }  role="alert">
                    {/* <h4 class="alert-heading">Signup Seccessful!</h4> */}
                    Account succesfully created. Go to Login Page
                    <button type="button" class="btn-close" onClick={()=>setIsSignup(false)} aria-label="Close"></button>
                </div>
            </div>
        </>

    );
}

export default Signup;