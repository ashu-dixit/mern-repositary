import React from "react"
import { Card, ListGroup, Button, ListGroupItem } from "react-bootstrap";


function card(props) {
    var userproduct=props.product
    userproduct.quantity = 1
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.picture} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <ListGroup>
                    <ListGroupItem>{props.product.discription.price}</ListGroupItem>
                    <ListGroupItem>{props.product.discription.size}</ListGroupItem>
                    <ListGroupItem>{props.product.discription.about}</ListGroupItem>
                    <ListGroupItem>{props.product.discription.colour}</ListGroupItem>
                </ListGroup>
                <Button variant="secondary" onClick={()=>{props.buttonfunction(userproduct) 
                    props.refresh()}}>{props.btnname}</Button>
            </Card.Body>
        </Card>
    )
}

export default card