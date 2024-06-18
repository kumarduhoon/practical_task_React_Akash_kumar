import React, { useState } from 'react'
import "./Register.css"

function Register() {
    const [registerInfo, setRegisterInfo] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [data, setData] = useState([])
    function onChangeHandler(e) {
        setRegisterInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    function onSubmit() {
        setData(() => [...data, registerInfo])
        setRegisterInfo(
            {
                username: "",
                email: "",
                password: ""
            }
        )
    }
    console.log(data)
    return (
        <>
            <div className='outer-con'>
                <h2> Register User</h2>
                <div className='inner-con'>
                    <div className='input-box-con'>
                        <label className='lable-text'>
                            Username
                        </label>
                        <input
                            type="text"
                            name='username'
                            value={registerInfo.username}
                            onChange={onChangeHandler}
                            placeholder='enter the username' className='input-box' />
                    </div>
                    <div className='input-box-con'>
                        <label className='lable-text' >
                            Email
                        </label>
                        <input
                            type='email'
                            name="email"
                            value={registerInfo.email}
                            onChange={onChangeHandler}
                            className='input-box input-email-box'
                            placeholder='enter the Email' />
                    </div>
                    <div className='input-box-con'>
                        <label className='lable-text' >
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            value={registerInfo.password}
                            onChange={onChangeHandler}
                            className='input-box'
                            placeholder='enter the password' />
                    </div>
                    <div className='btn-con'>
                        <button onClick={onSubmit} className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register