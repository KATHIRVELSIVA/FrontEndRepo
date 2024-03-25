import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export function Vehicle() {
    const [values, setValues] = useState({
        status: true,
        userID: Cookies.get("UserID")
    });

    const navigate = useNavigate();
    const id = Cookies.get('UserID');
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://localhost:44319/api/Vehicle', values)
            .then(res => {
                alert('car registered successfully..');
                navigate('/dashboard');
            })
            .catch(err => console.log(err));
    }
    return (
        <>

            <form className="card container mt-1 p-2 text-uppercase">
                <h3 className="text-center ">Register your vehicle</h3>

                <div className="mb-3">
                    <label>Vehicle Number</label>
                    <input
                        type="text"
                        className="form-control text-uppercase"
                        placeholder="AB XX CD XXXX"
                        aria-required
                        max={10}
                        onChange={e => setValues({ ...values, vehicleNo: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>MFG Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="MFG Name"
                        required
                        onChange={e => setValues({ ...values, vehicleName: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Vehicle Type</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Vehicle Type"
                        required
                        onChange={e => setValues({ ...values, vehicleType: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Location</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        required
                        onChange={e => setValues({ ...values, location: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label>Year of Make</label>
                    <input
                        type="month"
                        className="form-control"
                        placeholder="Year of Make"
                        required
                        onChange={e => setValues({ ...values, yearOfMake: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>IDV Value</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="IDV value"
                        required
                        onChange={e => setValues({ ...values, idVvalue: e.target.value })}
                    />
                </div>


                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}