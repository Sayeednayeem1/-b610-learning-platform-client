import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/language-categories')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <Container>
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
        </div>
    );
};

export default Courses;