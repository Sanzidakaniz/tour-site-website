import React from 'react';
import { useHistory } from 'react-router';

const FeaturedService = (props) => {
    // Destructuring the service data from object
    const {_id, name, description, serviceImg,price} = props.service;

    // Use history for changing the route after clicking the button
    const history = useHistory();

    // Handle Single Route
    const handleSingleRoute = (_id) => {
          history.push(`/services/singleService/${_id}`);
          console.log(_id);
    }
    // // Handle Single Route
    // const handleSingleRoute = () => {
    //       history.push('/MyOrder');
    //       console.log(_id);
    // }
    return (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="row">
<div className="col-md-12">
<div className="serviceBox">
          <img src={serviceImg} alt="serviceImg" width="100%" height="150" />
          <h2 className="serviceTitle">{name}</h2>
          <p className="serviceDesc">${price}</p>
          <p className="serviceDesc"> { description.slice(1, 120)}</p>
          <button onClick={() =>{ handleSingleRoute(_id);}} className="regularBtn">Booking &nbsp;<i className="fas fa-arrow-right"></i></button>
        </div>
</div>
        </div>

    </div>
    );
};

export default FeaturedService;