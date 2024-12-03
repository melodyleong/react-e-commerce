import React, {useEffect} from 'react';
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css"
import { useFlashMessage } from './FlashMessageStore';

import { Route, Switch } from 'wouter';
import ShoppingCart from './ShoppingCart';
import UserLogin from "./UserLogin"


export default function App() {

  const { getMessage, clearMessage  } = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
    , 10000);
    return () => {
      clearTimeout(timer);
    };
  }
  , [flashMessage]);


  return (
    <>

      <Navbar />
      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
      <Footer />

    </>
  )
}