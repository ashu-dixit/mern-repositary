import React, { Component } from "react"
import { Card,ListGroup,Button  } from "react-bootstrap";


class card extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/chair.jpeg" />
                <Card.Body>
                    <Card.Title>Chair Pair</Card.Title>
                    <ListGroup>
                        
                    </ListGroup>
                    <Button variant="secondary">Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default card