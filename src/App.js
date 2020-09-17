import React from 'react';
import './App.css';
import Navbar from './comonents/Navbar';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import Home from './comonents/pages/Home';
import Service from './comonents/pages/Service';
import Product from './comonents/pages/Product';
import SignUp from './comonents/pages/SingUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/services" exact component={Service}  />
        <Route path="/products" exact component={Product}  />
        <Route path="/sign-up" exact component={SignUp}  />
      </Switch>
    </Router>
    </>
  );
}

export default App;
