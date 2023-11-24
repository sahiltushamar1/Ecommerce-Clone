import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useEffect } from "react";
import { useStateValue } from "./StateProvider.js";
import Payment from "./Payment.js";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51OFv8BSDJMwdUJzZtH5p8LbmppxBKC2gpffXF5OxzslZ4xOk4UBT4QXOgAjSRqe9u0UKvhZWGGB64jDS0H14LZKd00Uor5eYR3');


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
  onAuthStateChanged(getAuth(), (authUser) => {
    console.log("The user is >>> ", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/payment" element = {<><Elements stripe={promise}> <Payment /> </Elements></>} />
          <Route path="/login" element = {<Login />} />
          <Route path="/Checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
