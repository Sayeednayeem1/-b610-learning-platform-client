import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Faq = () => {
    return (
        <div className='faq'>
            <div>
                <div className='text-center mx-auto p-5'>
                    <h2>Tools Of Web Development</h2>
                    <p>In this route i will talk about the important tools of web development </p>
                </div>
                <div className='accordion'>
                    <Accordion  defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>HTML</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Hypertext Markup Language, or HTML, is a programming language used to describe the structure of information on a webpage. Together, HTML, CSS, and JavaScript make up the essential building blocks of websites worldwide, with CSS controlling a page's appearance and JavaScript programming its functionality.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>CSS</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    CSS makes the front-end of a website shine and it creates a great user experience. Without CSS, websites would be less pleasing to the eye and likely much harder to navigate. In addition to layout and format, CSS is responsible for font color and more.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Javascript</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    JavaScript can make the website more interactive and user- friendliness of JavaScript helps easy navigation of the website and helps designers to guide the visitors with additional information or guide them through walkthroughs. Visual effects can also be achieved with JavaScript.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>React</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    React is an excellent tool with which to create interactive applications for mobile, web, and other platforms. React's popularity and usage are increasing day by day for good reason. As a developer, coding in React makes you better at JavaScript, a language that holds nearly 90% of the web development share today.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Node js</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='mt-5 self-adv'>
                    <h4>However this are the steps you can follow!</h4>
                    <br/>
                    <p>1. Understand the key concepts of visual design</p>
                    <br/>
                    <p>2. Know the basics of HTML</p>
                    <br/>
                    <p>3. Understand CSS</p>
                    <br/>
                    <p>4. Learn basic javascript seriously</p>
                    <br/>
                    <p>5. Learn React. Its cool!</p>
                    <br/>
                    <p>6. Understand the basics of creating layouts</p>
                    <br/>
                    <p>7. Put your knowledge into action and build something</p>
                    <br/>
                    <p>8. Take a break once in awhile</p>
                    <br/>
                </div>
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

export default Faq;