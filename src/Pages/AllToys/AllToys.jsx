import { Link, useLoaderData } from 'react-router-dom';
import './AllToys.css';
import { useEffect, useState } from 'react';


const AllToys = () => {
    const heroToys = useLoaderData();
    // load data
    const [heroToy, setHeroToys] = useState([]);
    //load more

    const [noofelem, setNoofelem] = useState(20);
    const sliceData = heroToy.slice(0, noofelem);
    // serach
    const [search, setSearch] = useState('');

    console.log(search);
    // console.log(heroToy);

    useEffect(() => {
        setHeroToys(heroToys);
    }, [])

    const handleSearch = () => {
        const url = `https://toy-hero-server-ten.vercel.app/toy/${search}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setHeroToys(data);
            });
    };

    const handleLoadmore = () => {
        setNoofelem(noofelem + noofelem);
    }
    return (
        <div>
            <div className="table">

                <div className="table__header">
                    <h1>All Hero <br /> Toy</h1>
                    <div className="input-group border">
                        <input
                            onChange={(e) => setSearch(e.target.value)}

                            type="text"

                            placeholder="                         Search Data..." />{' '}

                    </div>
                    {/* <button onClick={handleSearch}>Search</button> */}
                    <button class="btn btn-outline btn-primary" onClick={handleSearch}>Search</button>
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
                                sliceData.map(toy =>
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
                                                <button className=" btn btn-accent">Details</button>
                                            </Link>

                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                <div className=' ml-52'>
                    <button onClick={() => handleLoadmore()} className="btn btn-accent btn-wide ml-96"> Show More</button>

                </div>
            </div>
        </div>
    );
};

export default AllToys;