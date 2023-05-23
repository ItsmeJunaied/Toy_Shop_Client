import { useContext, useEffect, useState } from 'react';
import './MyToys.css';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';

const MyToys = () => {
    
    const { user } = useContext(AuthContext);
    const [mytoy, setMytoy] = useState([]);

    const url = `https://toy-hero-server-ten.vercel.app/toy?email=${user.email}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoy(data))
    }, [])

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-hero-server-ten.vercel.app/toy/${_id}`, {
                    method: 'Delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = mytoy.filter(toy=>toy._id!==_id);
                            setMytoy(remaining);
                    }
                })
            }
        })
    }
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
                            {/* <th>Details</th> */}
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mytoy.map(mt =>
                                <tr key={mt._id}>
                                    <td>
                                        <div className="txt">{mt.photo}</div>
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
                                        <Link to={`/update/${mt._id}`}>
                                            <button className="btn btn-outline btn-primary">Update</button>
                                        </Link>

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(mt._id)} className="btn btn-circle bg-red-500 border-none">
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