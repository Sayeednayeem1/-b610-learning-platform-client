import React from 'react';
import Card from 'react-bootstrap/Card';

const AllLanguagesDetails = ({ detail }) => {
    const { title, details, image } = detail;
    return (
        <div>
            <Card className="text-center mb-5">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image} height= "400px" width="300px" />
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            <footer>this is a test</footer>
        </div>
    );
};

export default AllLanguagesDetails;