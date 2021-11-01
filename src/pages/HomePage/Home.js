import React, { useState } from 'react';
import useLoadData from '../../customHooks/LoadServiceData/useLoadData';
// import './Home.css';
import FeaturedService from './FeaturedService/FeaturedService';
import './Home.css';
// import HomeImg from '../images/download.jpg';
// import FeaturedService from './FeaturedService/FeaturedService';




const Home = () => {
  
      // Get service data from use service custom hook
      const [services] = useLoadData();

    
    return (
      <div className="homePage">
       


<div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
       <div className="col-md-9">
              <h6 className="title">
                Make A Tour with Us.
              </h6>
              <p className="text-white mt-3">
                we are trying to provide best tour for all.Stay connected and make a wonderful tour with us.
              </p>
              <button className="mt-2 about-btn btn-danger p-2">Visit Us</button>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

        {/* services section */}

        <div className="FeaturedService">
            <div className="container">
              <div className="row">
                  <div className="sectionTitle">
                      <h1 className="title"><span className="highlight">Our Services</span> </h1>
                  </div>
                  {
                    services.map(service => <FeaturedService key={service.uniqueId} service={service} 
                      />)
                  }
              </div>
            </div>
        </div>

    </div>
    );
};

export default Home;