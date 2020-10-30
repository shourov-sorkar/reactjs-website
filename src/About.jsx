import React from "react";
import Carousel from "../node_modules/react-bootstrap/Carousel";
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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={slide1}
                            alt="Third slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img  "
                            src={slide2}
                            alt="Third slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img  "
                            src={slide3}
                            alt="Fourth slide"
                        />
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <h3>Fourth slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    );
};

export default About;