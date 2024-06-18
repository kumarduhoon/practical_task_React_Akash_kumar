import React, { useState } from 'react'
import "../register/Register.css"
import "./Login.css"

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [data, setData] = useState([])
    function onChangeHandler(e) {
        setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    function onSubmit() {
        setData(() => [...data, loginInfo])
        setLoginInfo(
            {
                email: "",
                password: ""
            }
        )
    }
    return (
        <>
            <div className='outer-con'>
                <h2> Login User</h2>
                <div className='inner-con'>
                    <div className='input-box-con'>
                        <label className='lable-text'>
                            Username or Email
                        </label>
                        <input
                            placeholder='enter the username'
                            type='text'
                            name="email"
                            value={loginInfo.email}
                            className='input-box'
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='input-box-con'>
                        <label className='lable-text' >
                            Password
                        </label>
                        <input
                            className='input-box input-box-password'
                            type='password'
                            name="password"
                            placeholder='enter the password'
                            value={loginInfo.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='btn-con'>
                        <button onClick={onSubmit} className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login