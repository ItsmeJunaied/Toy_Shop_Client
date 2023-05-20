import { Link, useLoaderData } from 'react-router-dom';
import './AllToys.css';


const AllToys = () => {
    const heroToys = useLoaderData();
    return (
        <div>
            <div className="table">

                <div className="table__header">
                    <h1>Customer's Orders</h1>
                    <div className="input-group border">
                        <input type="search" placeholder="                         Search Data..." />
                    </div>
                    <div className="export__file">
                        <label for="export-file" className="export__file-btn" title="Export File"></label>
                        <input type="checkbox" id="export-file" />
                    </div>
                </div>
                <div className="table__body">
                    <table>
                        <thead>
                            <tr>
                                {/* Seller: (if available) show the name of the person who posted the toy
                                Toy Name
                                Sub-category
                                Price
                                Available Quantity
                                View Details button */}
                                <th> Seller</th>
                                <th> Toy Name</th>
                                <th> Sub-category </th>
                                <th> Price</th>
                                <th> Available Quantity </th>
                                <th> View Details </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                heroToys.map(toy =>
                                    <tr key={toy._id}>
                                        <td> {toy.sname}</td>
                                        <td>{toy.name} </td>
                                        <td>
                                            <p className="status delivered">{toy.
                                                categoty}</p>
                                        </td>
                                        <td>{toy.price}</td>
                                        <td>
                                            {toy.quantity}
                                        </td>
                                        <td>
                                            <Link to={`/singletoy/${toy._id}`}>
                                                <button  className=" btn btn-accent">Details</button>
                                            </Link>
                                            
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;