import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Card from './card'

function Cart() {
    
                           
    var lst=[<div className="card-env"><Card /></div>, <div className="card-env"><Card /></div>, <div className="card-env"><Card /></div>]
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <FontAwesomeIcon onClick={handleShow} icon={faShoppingCart} />
            {/* <Button variant="primary" >
          Launch demo modal
        </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                // dialogClassName="modal-90w"
                size="lg"
                centered
            >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="overflow-auto">
                        <div className="card-gr-cart">
                        {lst}
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={lst.pop}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Cart