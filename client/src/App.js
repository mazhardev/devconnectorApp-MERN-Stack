import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import { Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
