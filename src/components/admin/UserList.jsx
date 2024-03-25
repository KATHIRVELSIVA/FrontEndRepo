import { useState, useEffect } from "react";
import axios from "axios";

export function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44319/api/User')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div>
                <h2>List of Users</h2>
                <table className="table table-striped">
                    <thead>
                        <tr className='text-uppercase justify-content-center'>
                            <th>UserName</th>
                            <th>Email ID</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data
                                .map((d) => (
                                    <tr className='text-uppercase' key={d.userId}>
                                        <td>{d.userName}</td>
                                        <td>{d.emailID}</td>
                                        <td>{d.phoneNo}</td>
                                        <td>
                                            <p className="btn btn-primary m-1" id={d.userId}>Edit</p>
                                            <p className="btn btn-danger m-1" id={d.userId}>Delete</p>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}