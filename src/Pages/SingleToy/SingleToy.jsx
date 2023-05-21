import { Link, useLoaderData } from 'react-router-dom';
import { FaBeer, FaRegStar, FaStar } from "react-icons/fa";
import './SingleToy.css';
import Rating from 'react-rating';

const SingleToy = () => {
    const singleid = useLoaderData();
    const { _id, name, sname, email, price, rating, quantity, detail, photo } = singleid;
    // console.log(singleid);
    return (
        <div className='flex justify-center align-middle'>
            <div className="custom-card" id="hulk">
                <div className="card-image">
                    <img src={photo} />
                </div>
                <div className="card-text">
                    <h2>{name}</h2>
                    <p>COMICS<br />GROUP</p>
                    <div>
                        <div>
                            <span>{price}</span>
                            <span>&cent;</span>
                        </div>
                        <div>
                            <span>{quantity}</span>
                            <span>Avaiable</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-md md:max-w-2xl px-2">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                        <div>
                            <div className="p-4 md:p-5">
                                <p className="font-bold text-xl md:text-2xl text-blue-500">Seller Name: {sname}</p>
                                <p className="font-bold text-xl md:text-2xl text-green-500">Seller E-mail: {email}</p>

                                <p className="text-gray-700 md:text-lg mt-3">{detail}</p>
                            </div>
                            <div className="p-4 md:p-5 bg-gray-100">
                                <div className="sm:flex sm:justify-between sm:items-center">
                                    <div>
                                        <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold">17</span> per person*</div>
                                        <div className="flex items-center">
                                            <Rating className=' text-amber-400'
                                                placeholderRating={rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            />
                                            <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">28 reviews</div>
                                        </div>
                                    </div>
                                    <Link to={'/alltoys'}>
                                        <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">Go Back</button>
                                    </Link>

                                </div>
                                <div className="mt-3 text-gray-600 text-sm md:text-base">*Prices may vary depending on selected date.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default SingleToy;