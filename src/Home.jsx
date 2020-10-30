import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.svg";
const Home = () => {
    return (
        <>
            <section id="header" className=" ">
                <div className="container-fluid h-100">
                    <div className="row h-100 ">
                        <div className="col-10 mx-auto home-section">
                            <div className="row d-flex align-items-center h-100">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Let's get started with <strong className="brand-name">The BitCode</strong></h1>
                                    <h2 className="my-3">We are the team of Creative developer making interactive websites</h2>
                                    <div className="mt-3">
                                        <NavLink to="/services" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2  header-img text-right">
                                    <img src={web} className="img-fluid mx-auto animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;