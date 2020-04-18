import React from "react"
import { Card, ListGroup, Button, ListGroupItem } from "react-bootstrap";


function card(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.photo} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <ListGroup>
                    <ListGroupItem>{props.discription.price}</ListGroupItem>
                    <ListGroupItem>{props.discription.size}</ListGroupItem>
                    <ListGroupItem>{props.discription.about}</ListGroupItem>
                    <ListGroupItem>{props.discription.colour}</ListGroupItem>
                </ListGroup>
                <Button variant="secondary">{props.btnname}</Button>
            </Card.Body>
        </Card>
    )
}

export default card