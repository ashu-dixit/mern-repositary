import React, { Component } from "react"
import { Dropdown } from 'react-bootstrap'

class Header extends Component{
  constructor(){
    super()
    this.state={
      country:"India"
    }
  }
  changeCountry(con){
    this.setState({
      country:con
    })
  }

    render(){
        return(
            <div className="container">
              <div className="row">
                <div className="col-md-4 my-md-3 col-sm-12 col-12">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      {this.state.country}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.changeCountry("America")} href="#actiona">America</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.changeCountry("India")} href="#actionb">India</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.changeCountry("Europe")} href="#actionc">Europe</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-md-4 col-12 text-center">
                  <h2 className="my-md-3 site-title">Online Store</h2>
                </div>
                <div className="col-md-4 col-12 my-md-4 text-right login-link">
                  <a href="auth/google" className="px-1">Log in</a>&nbsp;
                  <a href="auth/logout">log out</a>
                </div>
              </div>
            </div>
        )        
    }
}

export default Header