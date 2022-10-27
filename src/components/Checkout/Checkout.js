import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Download from '../../assets/brands/download.jpg';
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';
import Download1 from '../../assets/brands/download (1).jpg';
import Download2 from '../../assets/brands/download (2).jpg';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='checkout-route'>
            <div className='text-primary text-center checkout-text'>
                <h2>Welcome To Our Amazing Course</h2>
                <h4>Happy Journey! Give Your Absolute Best!</h4>
            </div>
            <Container className='container-checkout'>
                <Row>
                    <Col lg="6">
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Javascript</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Developers use JavaScript to build complex interactive websites and browser games, and to connect servers to websites and web applications. Because of this versatility, it's easy to see why this language is the most commonly used programming language in the world.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Python</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>PHP</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Thus, PHP is used to create small static websites as well as large content-based sites. Some of the best Web Content Management Systems (CMS) managed by PHP are WordPress and its plugins, user interface of Drupal, Joomla, Facebook, MediaWiki, Silverstripe, and Digg, among others.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>C++</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        What is C++ Used For? C++ (or “C-plus-plus”) is a general-purpose programming and coding language. C++ is used in developing browsers, operating systems, and applications, as well as in-game programming, software engineering, data structures, etc.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Java</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Developers use Java to construct applications in laptops, data centres, game consoles, scientific supercomputers, cell phones, and other devices. Java is the world's third most popular programming language, after Python and C – according to the TIOBE index, which evaluates programming language popularity.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>C</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        It has found lasting use in operating systems, device drivers, protocol stacks, though decreasingly for application software. C is commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg='6'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Download1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Welcome To This Awesome Journey!</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Download}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h4>Welcome To This Awesome Journey!</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Download2}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h4>Welcome To This Awesome Journey!</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <footer className='text-center bg-info footer-checkout'>
                <p><small>Alright reserved @2023</small></p>
                <div>
                    <FaFacebook className='fs-1'></FaFacebook>
                    <FaTwitter className='ms-5 fs-1'></FaTwitter>
                    <FaInstagram className='ms-5 fs-1'></FaInstagram>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;