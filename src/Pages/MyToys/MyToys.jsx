import { useContext, useEffect, useState } from 'react';
import './MyToys.css';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoy, setMytoy] = useState([]);

    const url = `http://localhost:5000/toy?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoy(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Picture URL</th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mytoy.map(mt=>
                            <tr key={mt._id}>
                                <td>
                                <div className=" text-xs">{mt.photo}</div>
                                </td>
                                <td>
                                    <div className="">{mt.name}</div>
                                </td>
                                <td>
                                    <div className="">{mt.sname}</div>
                                </td>
                                <td>
                                    <div className="">{mt.email}</div>
                                </td>
                                <td>{mt.categoty}</td>
                                <td>{mt.price}</td>
                                <td>{mt.rating}</td>
                                <td>{mt.quantity}</td>
                                <td>
                                    <button className="btn btn-outline btn-secondary">Details</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline btn-primary">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;