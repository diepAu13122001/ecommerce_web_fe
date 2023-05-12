import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import PersonalIn4 from './pages/PersonalIn4';
import { CheckoutNoAcc, CheckoutWithAcc } from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/ProductDetails" component={ProductDetails}></Route>
          <Route path="/PersonalIn4" component={PersonalIn4}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Route path="/Products" component={ProductList}></Route>
          <Route path="/checkoutNoAcc" component={CheckoutNoAcc}></Route>
          <Route path="/checkoutWithAcc" component={CheckoutWithAcc}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
