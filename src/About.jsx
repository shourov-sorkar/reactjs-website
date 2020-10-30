import React from "react";
import Carousel from "../node_modules/react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import slide from "../src/images/slide1.jpg";
import slide1 from "../src/images/slide2.jpg";
import slide2 from "../src/images/slide3.jpg";
import slide3 from "../src/images/slide4.jpg";
const About = () => {
    return (
        <>
            <div className="container-fluid-xl">
                <Carousel >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={slide}
                            alt="First slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <h3>Let Us know Your Story</h3>
                            <p>Web Development | Web Design | Mobile Application</p>
                            <NavLink to="" class="btn btn-primary card-btn btn2">Learn More</NavLink>
                        </Carousel.Caption>

                       
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={slide1}
                            alt="Third slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption >
                            <h3>Let's grow your business with The BitCode</h3>
                            <p>Websites promote you 24/7: No employee will do that</p>
                            <NavLink to="" class="btn btn-primary card-btn">Learn More</NavLink>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img  "
                            src={slide2}
                            alt="Third slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption >
                            <h3>We're Passionate</h3>
                            <p>We love what we do and we do what our clients love and work with great clients all over the world to create thoughtful and purposeful websites</p>
                            <NavLink to="" class="btn btn-primary card-btn btn2">Learn More</NavLink>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img  "
                            src={slide3}
                            alt="Fourth slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption >
                            <h3>We're Professional</h3>
                            <p>Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business</p>
                            <NavLink to="" class="btn btn-primary card-btn btn2">Learn More</NavLink>
                        </Carousel.Caption>
                       

                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    );
};

export default About;