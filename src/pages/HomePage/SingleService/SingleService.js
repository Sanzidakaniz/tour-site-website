import React, { useEffect, useState } from 'react';
import './SingleService.css';
import { useHistory, useParams } from 'react-router';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';



const SingleService = () => {
      // For changing route
      const history = useHistory();
      // Store service data from in the state 
      const [services, setServices] = useState([]);
    
      // For getting single service id 
      const {uniqueId} = useParams();
     
      // Getting the service data from separate data loading file
      useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>setServices(data));
    }, [uniqueId]);
     console.log(services);
     // If service is true then find the selected one
     if(services.length){
        const singleService = services.find(service => service._id === uniqueId);
        if(singleService){
          // If service is found then set the single service in the state 
          setServices(singleService);
        }else{
            // If service is not found then redirect to the home page
            history.push('/');
        }
     }
    
     // Destructuring the single service data from object
     const {name, description, img,price} = services;
    
    return (
        <div className="singleServiceArea">
             <div className="container">
                 <div className="row">
                     <div className="col-md-5 col-sm-12">
                         <div className="singleServiceBox">
                             <img src={img} alt="serviceImg" />
                             <div className="details">
                             <h2 className="serviceTitle">{name}</h2>
                             <p className="serviceDesc">${price}</p>
                             <p className="serviceDesc">{description}</p>
                            
                             </div>
                         </div>
                     </div>
                     <div className="col-md-7 col-sm-12  ">
                       <div className="place-order"> <PlaceOrder></PlaceOrder></div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default SingleService;