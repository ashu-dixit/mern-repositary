import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Slider extends Component {
    render() {
        return (
            // <div className="container-fluid p-0">
            //     <div className="site-slider">
            //         <div className="slider-one">
            //             <div>
            //                 <img src="./images/chair.jpeg" alt="slide"className="img-fluid"></img>
            //             </div>
            //             <div>
            //                 <img src="./images/chair2.jpeg" alt="slide" className="img-fluid"></img>
            //             </div>
            //             <div>
            //                 <img src="./images/sofa.jpeg" ald="slide" className="img-fluid"></img>
            //             </div>
            //         </div>
            //     </div>
            // </div>


            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 "
                        src="./images/image.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/image.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/image.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider