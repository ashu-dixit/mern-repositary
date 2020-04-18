import React, { Component } from "react";
import Card from "./card";
import axios from "axios";
var productlst = []

class Products extends Component {

    constructor(props){
        super(props)
        this.state = {
            newpro:[]
        }
    }
   refresh(){
    axios.get(this.props.link)
    .then((res) => {
        productlst = res.data
        //debug
        // console.log(productlst);
        this.setState({
            newpro : productlst.map(
            product => <div key={product._id} className="card-env"><Card buttonfunction={this.props.buttonfunction} btnname={this.props.btnname} product={product} >
                </Card>
            </div>)})
        
    })
   }
    UNSAFE_componentWillMount() {
        //getting product from database
        // when you get null error means u are sending before fetching
        axios.get(this.props.link)
            .then((res) => {
                productlst = res.data
                //debug
                // console.log(productlst);
                this.setState({
                    newpro : productlst.map(
                    product => <div key={product._id} className="card-env"><Card refresh={this.refresh.bind(this)} buttonfunction={this.props.buttonfunction} btnname={this.props.btnname} product={product} >
                        </Card>
                    </div>)})
                
            })
    }

    render() {
    return (this.state.newpro)
    }

}

export default Products