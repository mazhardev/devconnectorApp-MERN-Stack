import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './app/store/configureStore';

import jwt_decode from "jwt-decode";
import setAuthToken from "./app/common/util/setAuthToken";
import { setCurrentUser, logout } from "./components/auth/authActions";
import { clearCurrentProfile } from './components/dashboard/actions';
import PrivateRout from './app/common/PrivateRoute';
import CreateProfile from './components/create-profile/CreateProfile';

//// Check for token
if (localStorage.jwtToken) {
  //// Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //// Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //// Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logout());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRout exact path="/dashboard" component={Dashboard} />
                <PrivateRout exact path="/create-profile" component={CreateProfile} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
