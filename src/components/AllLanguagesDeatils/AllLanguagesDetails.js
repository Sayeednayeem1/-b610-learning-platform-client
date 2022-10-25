import React from 'react';
import Card from 'react-bootstrap/Card';

const AllLanguagesDetails = ({ detail }) => {
    const { title, details, image } = detail;
    return (
        <div>
            <Card className="text-center">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default AllLanguagesDetails;