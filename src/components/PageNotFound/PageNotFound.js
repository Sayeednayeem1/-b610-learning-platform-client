import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Error_Image from '../../assets/brands/Page-404.jpg';

const PageNotFound = () => {
    return (
        <div className='page-not-found-div'>
            <Container className='page-not-found'>
                <Row>
                    
                    <Col>
                        <Image className='img-fluid' alt='Responsive image' src={Error_Image}></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageNotFound;