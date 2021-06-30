import './App.css';
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (

        <React.Fragment>

            <Navbar />
            
              <Switch>
                <Route exact path="/SushiFoodDelivery/" component={ProductList} />
                <Route path="/details/" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />  
              </Switch>
              <Modal />

          </React.Fragment>

    )
  }
}

export default App
