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
          <Route path="/payment" element = {<><Payment /></>} />
          <Route path="/login" element = {<Login />} />
          <Route path="/Checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
