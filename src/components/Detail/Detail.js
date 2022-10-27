import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Detail = ({ detail }) => {
    const { title, details, image } = detail;
    return (
        <div>
            <h2 className='mb-5 mx-auto text-primary text-center'>Details About {title}</h2>
            <Card className="text-center mb-5 h-25 c w-25 mx-auto">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image} alt="Responsive image" className="img-fluid" />
                    <Card.Text>
                        {details.slice(0, 100)}
                    </Card.Text>
                    <Button variant="success" detail={detail}><Link to='/checkout' className='text-decoration-none text-white'>Get
                        Premium Access</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Detail;