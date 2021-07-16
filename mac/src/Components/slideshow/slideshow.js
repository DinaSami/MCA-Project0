import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Slideshow extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item interval={700}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/a4/45/a5/a445a586445dfbddfe691106d0b3b0b3.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/a7/39/84/a739845a10f0fdcd598d60882759cbc2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/30/bb/7e/30bb7e5cf2b357210160607273de264a.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
