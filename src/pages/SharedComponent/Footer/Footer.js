import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
       <section className="footerSection">
           <div className="footerArea">
               <div className="container">
                   <div className="row">
                     
                       <div className="col-lg-4 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Pages</h3>
                        <NavLink id="menu" to="/home"><span className="menus">Home</span></NavLink>
                        <NavLink id="menu" to="/about"><span className="menus">About</span></NavLink>
                        <NavLink id="menu" to="/AddServices"><span className="menus">Add Services</span></NavLink>
                        
                        <NavLink id="menu" to="/account"><span className="menus">Login</span></NavLink>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Address</h3>
                       <span className="add-footer"> Chittagong,  Bangladesh</span>
                       <span className="add-footer">Mobile : 3456987140</span>
                      
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-3 col-sm-3">
                           <div className="secondFooterBox"> 
                    <div className="footerNavbar">
                    <h3 className="itemName">Branches</h3>
                       <span className="">Rangpur</span>
                       <span className="">Chadpur</span>
                       <span className="">Dhaka</span>
                       <span className="">Rajshahi</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Footer;