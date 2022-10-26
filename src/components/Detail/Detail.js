import React from 'react';
import Card from 'react-bootstrap/Card';

const Detail = ({ detail }) => {
    const { title, details, image } = detail;
    return (
        <div>
            <h2 className='mb-2 mx-auto text-primary text-center'>Details About {title}</h2>
            <Card className="text-center mb-5 h-25 c w-25 mx-auto">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image}  alt="Responsive image" className="img-fluid"  />
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Detail;