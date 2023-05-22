import React, { useContext, useEffect, useState } from 'react';
import './ReactTab.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const ReactTab = () => {
  // const [activeTab, setActiveTab] = useState(1);
  const { user } = useContext(AuthContext);
  const [catData, setCatData] = useState([]);
  console.log(catData);
  const [Active, setActiveTab] = useState(' ');
  // const alldata=useLoaderData();
  // console.log('all data',alldata);
  const url = `http://localhost:5000/toy?categoty=${Active}`;
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
      <h1 className="title text-center mt-5 p-5">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("Marvel")}
              className={`tab  tab2 Marvel ${Active == "Marvel" ? " bg-danger text-white" : ""
                }`}
            >
              MARVEL
            </div>
            <div
              onClick={() => handleTabClick("American")}
              className={`tab  tab2 American ${Active == "American" ? " bg-danger text-white" : ""
                }`}
            >
              AMERICAN
            </div>
            <div
              onClick={() => handleTabClick("TRANSFORMERS")}
              className={`tab  tab2 TRANSFORMERS ${Active == "TRANSFORMERS" ? " bg-danger text-white" : ""
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
              <div class="nft">
                <div class='main'>
                  <img class='tokenImage' src={ct.photo} alt="NFT" />
                  <h2>Kibertopiks #4269</h2>
                  <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                  <div class='tokenInfo'>
                    <div class="price">
                      <ins>◘</ins>
                      <p>0.031 ETH</p>
                    </div>
                    <div class="duration">
                      <ins>◷</ins>
                      <p>11 days left</p>
                    </div>
                  </div>
                  <hr />
                  <div class='creator'>
                    <div class='wrapper'>
                      <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
                    </div>
                    <p><ins>Creation of</ins> Kiberbash</p>
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
