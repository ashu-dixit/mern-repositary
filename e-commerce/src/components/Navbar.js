import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import Cart from "./ShopCart";
class navbar extends Component {
    
    constructor() {
        super()
        this.state={
            load:false
        }
        console.log("Hello")
    }
    setshow(bar) {
        this.setState={
            load:bar
        }
        console.log("Hello")
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#features">Collection</Nav.Link>
                        <Nav.Link href="#pricing">Contact us</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Nav className="nav-icon">
                    <NavItem className="mx-2 search-icon"><NavLink href="#pricing"><FontAwesomeIcon icon={faSearch} /></NavLink></NavItem>
                    <NavItem className="mx-2 search-icon">
                        <NavLink href="#pricing" onClick={()=>this.setshow(true)} >
                            <Cart/>
                        </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
        )
    }
}


export default navbar