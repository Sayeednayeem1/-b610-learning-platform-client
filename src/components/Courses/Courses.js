import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/language-categories')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    return (
        <div className='courses'>
            <Container className='courses-details'>
                <Row>
                    <Col lg='4'>
                        <h5>Courses Available: {courses.length}</h5>
                        <div className='border-end'>
                            {
                                courses.map(course => <p key={courses.id}>
                                    <Link to={`/category/${course.id}`}>{course.name}</Link>
                                </p>)
                            }
                        </div>
                    </Col>
                    <Col lg='8'>
                        <Details></Details>
                    </Col>
                </Row>
            </Container>
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

export default Courses;