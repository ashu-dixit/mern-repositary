import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Corousel from './components/slider'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Provider } from "react-redux";
import store from "./redux/store";
import Products from './components/productList';


// const person = [
//   { id: 1, name: 'Bruce', skill: 'java' }, { id: 2, name: 'Clark', skill: 'C++' }, { id: 3, name: 'Diana', skill: 'c' }]
// const newperson = person.map(person => <div key={person.id}><h2>I am {person.name}. I know {person.skill}</h2></div>)
class App extends Component {



  // useEffect(() => axios.get('/product/').then((res) => {
  //   productlst=res.data
  //   console.log(productlst);
  // }))

  render() {
    return (
      <Provider store={store} >
        <div>
          <div className="header"><Header /></div>
          <div className="nabs"><Navbar></Navbar></div>
          <div className="sss"><Corousel></Corousel></div>
          <div className="card-grp">
          <div className="col-12 pt-5 text-center"><h3 style={{ fontSize: "50px" }}>For you</h3></div>
            <Products link="/product" btnname="Add to Cart"></Products>

          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
