import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector} from 'react-redux'

// import "./components/login-signup.css";

function Login() {

    // let dispatch = useDispatch();

    let list = useSelector((data) => data.LoginReducer.list)

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    

    let history = useHistory();

    let [isAuth, setIsAuth] = useState(false);

    const setInputs1 = (e) => {
        return setUserName(e.target.value)
    }

    const setInputs2 = (e) => {
        return setPassword(e.target.value)
    }
    
    const authentic = () => {

        if(userName === '' || password === ''){
            return console.log('please enter the UserName and Password');
        }
        else {
            list.forEach( (data) => {
                if (userName === data.userName && password === data.password) {
                    setIsAuth(true);
                    history.push("/main");
                    return console.log("success");
                }
            })
            console.log(isAuth);
            if(!isAuth) {
                return console.log('please enter the correct credentials (userName: abc, password: 123)');
            }
        }
        
    }


    return (
        <div className="container">
            <div className="login-backdrop"></div>
            <div class="container container-props">
                <div class="row no-gutters justify-content-center">
                    <div class="col col-sm-8 col-md-6 col-lg-4 align-self-start form-col-props">
                        <h1 class="brand-icon text-center mb-5">fitin'fit</h1>
                        <div class="login-form">
                        <div class="form-group text-white">
                            <label for="login-username" class="sr-only">Username</label>
                            <input type="text" id="login-username" class="form-control mb-4 login-input-props" placeholder="Username" value={userName} onChange={setInputs1} />
                            <label for="login-password" class="sr-only">Password</label>
                            <input type="password" id="login-password" class="form-control mb-5 login-input-props" placeholder="Password" value={password} onChange={setInputs2} />
                        </div>
                            <button class="btn login-btn-props" onClick={ 
                                authentic
                            }>get started</button>
                        </div>
                        <div class="links">
                            <span onClick={() => history.push('./signup')}  class="signup-link">create account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;