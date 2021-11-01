import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="aboutUsPage">
           <div className="aboutHospital">
                <div className="container">
                    <div className="row">
                        <h2 style={{color:"#444", fontSize: "45px", fontWeight: 700, textAlign: "center", marginBottom: "10px"}}>About Us</h2>
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <div className="aboutInfo">
                              
                                <p className="themeDesc"> TourSite is a online tour website.We can offer minimum cost for every travel.You can travel hole bangladesh with us.We have experienced guide,they will give you best service.We also have a lot of tour services.we manage good quality hotels,good quality vehicles and all the thing our customer needed.This website is customer friendly website.You can replace your order if you do not want to go for travel.you can take back your money also. 
                                we have services like:Banderban tour,Rangamati tour,Jaflong tour,Kaptai Lack Tour,Shunderban tour,Dhaka Tour,Saint Martin tour,Moinamoti tour,Paharpur tour,Mirashshorai tour,Jhorna travel etc.
                              You can choose your favourite one or more. </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="detailImg">
                                <img style={ {borderRadius: "10px"}} height="350" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZipjFmtjWVm0CaNgwNa_jqoPpeBYMN9w5Y7kvXLn5U-kObViawxqs6UYuvx-v-Z3UY8&usqp=CAU" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;