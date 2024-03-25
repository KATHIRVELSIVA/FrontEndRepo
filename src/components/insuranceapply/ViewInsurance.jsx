import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { data } from "jquery";
export function ViewInsurance() {

    const [data, setData] = useState([]);
    const [insurance, setInsurance] = useState([]);
    const [policy, setPolicy] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        var UserID = Cookies.get("UserID");
        axios.get('https://localhost:44319/api/Vehicle/' + id)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
        axios.get('https://localhost:44319/api/AddOnPolicy')
            .then(res => {
                setPolicy(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
        axios.get('https://localhost:44319/api/InsuranceApply')
            .then(res => {
                setInsurance(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <>
            <h1>View insurance</h1>

            <div className="container">
                <div className="card container-fluid">
                    <div className="card-header">
                        Your insurance details for your car
                    </div>
                    <div className="card-body">
                        <div className="text-uppercase">{data.vehicleNo}</div>
                        <div className="text-uppercase">{data.vehicleName}</div>
                    </div>
                    <div className="card-footer">

                        {
                            policy
                                .map(item => (
                                    <div key={item.addOnPolicyID} className="div">
                                        {item.addOnPolicyName}
                                        {
                                            insurance
                                                .map(ins => (
                                                    <div key={ins.addOnPolicyID == item.addOnPolicyID}>
                                                        {ins.addOnPolicyName}
                                                    </div>
                                                )

                                                )
                                        }
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}