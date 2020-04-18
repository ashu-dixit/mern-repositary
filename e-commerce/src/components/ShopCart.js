import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Card from './card'
import axios from "axios";
import Products from "./productList";

function Cart() {
    var lst = []
    var newlst = []

    const buttonfunction = function(product){
        axios.post('/product/removefromcart', {
        productIdToRemove:product._id
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
      }
    // const buttonfunction = function(product){
    //     console.log(product._id)
    // }
    // var newlst=[<div key="1" className="card-env"><Card /></div>, <div key="2" className="card-env"><Card /></div>, <div key="3" className="card-env"><Card /></div>]
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // axios.get('/product/usercart')
    //     .then((res) => {
    //         lst = res.data
    //         console.log(res.data);
    //         newlst = lst.map(product => <div key={product._id} className="card-env">
    //             <Card name={product.productName} discription={product.discription} photo={product.picture} ></Card>
    //         </div>)
    //     })
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
                            <Products link="/product/usercart" btnname="Buy Now" buttonfunction={buttonfunction}></Products>
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