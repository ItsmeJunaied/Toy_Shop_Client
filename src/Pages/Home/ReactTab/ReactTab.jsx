import React, { useContext, useEffect, useState } from 'react';
import './ReactTab.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ReactTab = () => {
  // const [activeTab, setActiveTab] = useState(1);
  const { user } = useContext(AuthContext);
  const [catData, setCatData] = useState([]);
  console.log(catData);
  const [Active, setActiveTab] = useState(' ');
  // const alldata=useLoaderData();
  // console.log('all data',alldata);
  const url = `https://toy-hero-server-ten.vercel.app/toy?categoty=${Active}`;
  // console.log(url);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCatData(data));
  }, [url]);

  const handleTabClick = (Active) => {
    setActiveTab(Active);
  };

  return (
    <div>
      <h1 className="title text-cyan-400 text-center mt-5 p-5">Toy Category</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs flex  justify-evenly align-middle bg-purple-600  rounded-3xl ml-36 mr-20">
            <div
              onClick={() => handleTabClick("Marvel")}
              className={`tab btn btn-primary tab2 Marvel ${Active == "Marvel" ? " btn bg-secondary text-white" : ""
                }`}
            >
              MARVEL
            </div>
            <div
              onClick={() => handleTabClick("American")}
              className={`tab btn btn-primary tab2 American ${Active == "American" ? " bg-secondary text-white" : ""
                }`}
            >
              AMERICAN
            </div>
            <div
              onClick={() => handleTabClick("TRANSFORMERS")}
              className={`tab btn btn-primary tab2 TRANSFORMERS ${Active == "TRANSFORMERS" ? " bg-secondary text-white" : ""
                }`}
            >
              TRANSFORMERS
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 flex flex-row">
        {
          catData.slice(0, 2).map(ct =>
            <div key={ct._id} className='flex-grow '>
              <div className="nft">
                <div className='main'>
                  <img className='tokenImage' src={ct.photo} alt="NFT" />
                  <h2 className=' text-purple-600'>{ct.name}</h2>
                  <p className='description text-2xl font-bold text-center'>${ct.price}</p>
                  <div className='tokenInfo'>
                    <div className=' flex'>
                      <div className="price flex-grow">
                        <ins>◘</ins>
                        <p>
                          <Rating className=' text-amber-400'
                            placeholderRating={ct.rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </p>
                      </div>
                      <div className=' flex-grow'>
                        
                        <Link to={`/singletoy/${ct._id}`}>
                        <button className="btn btn-active btn-link">View More</button>
                        </Link>
                      </div>
                    </div>


                  </div>
                  <hr />
                  <div className='creator'>
                    <div className='wrapper'>
                      <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
                    </div>
                    <p><ins>Epitome of</ins> <span className=' text-pink-600'>{ct.categoty}</span> </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
};

export default ReactTab;
