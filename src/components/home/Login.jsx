import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
export function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        axios.post('https://localhost:44319/api/GetKey', values)
            .then(res => {
                Cookies.set("UserID", res.data);
            })
        axios.post('https://localhost:44319/api/Login', values)
            .then(res => {
                if (res.data["emailstatus"] === true) {
                    if (res.data["passwordstatus"] === true) {
                        alert("User Logged in successfully..");
                        Cookies.set("email", values.email);
                        Cookies.set("password", values.password);
                        navigate('/dashboard'); 
                        window.location.reload();
                    }
                    else {
                        alert("Invalid Credentials");
                    }
                }
                else {
                    alert("User not availble...");
                    navigate('/home');
                }
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <h3 className="text-center">General Insurance System</h3>
            <form className="card container mt-5 p-5" onSubmit={handleSubmit} >
                <h3 className="text-center">LOGIN</h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        onChange={e => setValues({ ...values, email: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={e => setValues({ ...values, password: e.target.value })}
                        required
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

                <p className='signup user text-left'>
                    <a href='sign-up'>New User?</a>
                </p>
            </form>
        </>
    );
}