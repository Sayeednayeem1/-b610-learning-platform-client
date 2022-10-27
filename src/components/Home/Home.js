import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaAccusoft, FaFacebook, FaGhost, FaGoogle, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from 'react-bootstrap';
import Download from '../../assets/brands/download.jpg';
import Download1 from '../../assets/brands/download (1).jpg';
import Download2 from '../../assets/brands/download (2).jpg';

const Home = () => {
    return (
        <div className='home-page'>
            <div className="text-center p-5 text-primary">
                <h2>Welcome To Coding Academy</h2>
                <h4>Here we write and transform our dreams to reality</h4>
            </div>
            <Container>
                <Row className='home-page-row'>
                    <Col lg='5'>
                        <ListGroup className='me-5'>
                            <ListGroup.Item className='mb-2'> <FaFacebook className='fs-4'></FaFacebook> Facebook</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaTwitter className='fs-4'></FaTwitter> Twitter </ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaTwitch className='fs-4'></FaTwitch> Twitch</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaGoogle className='fs-4'></FaGoogle> Google</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaInstagram className='fs-4'></FaInstagram> Instagram</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaWhatsapp className='fs-4'></FaWhatsapp> Whatsapp</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaLinkedin className='fs-4'></FaLinkedin> Linkedin</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaGhost className='fs-4'></FaGhost> Ghost</ListGroup.Item>
                            <ListGroup.Item className='mb-2'> <FaAccusoft className='fs-4'></FaAccusoft> Accusoft</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg='7'>
                        <Carousel>
                            <Carousel.Item className='ms-5'>
                                <img
                                    className="d-block w-100"
                                    src={Download1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Javascript</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Download}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>PHP</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Download2}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Python</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <div>
                <CardGroup className='card-group p-5'>
                    <Card className='me-2 '>
                        <Card.Img className='p-2' variant="top" src={Download} />
                        <Card.Body>
                            <Card.Title>Javascript</Card.Title>
                            <Card.Text>
                                JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='me-2'>
                        <Card.Img className='p-2' variant="top" src={Download1} />
                        <Card.Body>
                            <Card.Title>PHP</Card.Title>
                            <Card.Text>
                                PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className='p-2' variant="top" src={Download2} />
                        <Card.Body>
                            <Card.Title>Python</Card.Title>
                            <Card.Text>
                                Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures and lot more.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <footer className='text-center bg-info p-4'>
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

export default Home;