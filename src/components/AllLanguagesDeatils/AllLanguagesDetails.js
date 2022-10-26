import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './AllLanguagesDetails.css';

const AllLanguagesDetails = ({ detail }) => {
    const { title, details, image } = detail;
    return (
        <div className='test'>
            <CardGroup className='test' style={{ width: '30rem' }}>
                <Card>
                    <Card.Img variant="top" src={image} className='p-4' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AllLanguagesDetails;