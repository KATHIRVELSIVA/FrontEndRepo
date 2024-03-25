import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function VehicleList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44319/api/Vehicle')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div>
                <h2>List of Vehicles</h2>
                <table className="table table-striped">
                    <thead>
                        <tr className='text-uppercase justify-content-center'>
                            <th>Vehicle No</th>
                            <th>Vehicle Name</th>
                            <th>Vehicle Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data
                                .map((d) => (
                                    <tr className='text-uppercase' key={d.vehicleId}>
                                        <td>{d.vehicleNo}</td>
                                        <td>{d.vehicleName}</td>
                                        <td>{d.vehicleType}</td>
                                        <td>
                                            <Link to={`/vehicleupdate/${d.vehicleId}`} className="btn btn-primary m-1">Edit</Link>
                                            <Link to={`/vehicledelete/${d.vehicleId}`} className="btn btn-danger m-1">Delete</Link>
                                        </td>

                                    </tr>

                                ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};