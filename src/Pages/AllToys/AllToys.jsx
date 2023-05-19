import './AllToys.css';

const AllToys = () => {
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
                            <tr>
                                <td> 1 </td>
                                <td> </td>
                                <td>
                                    <p className="status delivered">Delivered</p>
                                </td>
                                <td> 17 Dec, 2022 </td>
                                <td>
                                    Delivered
                                </td>
                                <td> <button className=" btn btn-accent">Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;