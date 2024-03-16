import React from 'react';
import '../index.css';
function Login() {
    const handlesubmit=()=>{
        console.log('form submitted')
    }
    return (
        <div id="login">

            <form id="login-form">
                <div>
                <label>UserName</label>
                <input type="text" placeholder="Enter your UserName"></input>
                </div>
                <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password"></input>
                </div>
                <button onClick={handlesubmit} >Login</button>
            </form>
        </div>
    )
}

export default Login;
