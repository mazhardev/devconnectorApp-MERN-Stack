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
import EditProfile from './components/edit-profile/EditProfile';
import AddEducation from './components/dashboard/AddEducation';
import AddExperience from './components/dashboard/AddExperience';
import Profiles from './components/profiles/Profiles';
import Profile from "./components/profile/Profile";
import NotFound from "./components/not-found/NotFound";
import Posts from "./components/posts/Posts";

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
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Route exact path="/not-found" component={NotFound} />
              <Switch>
                <PrivateRout exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRout exact path="/create-profile" component={CreateProfile} />
              </Switch>
              <Switch>
                <PrivateRout exact path="/edit-profile" component={EditProfile} />
              </Switch>
              <Switch>
                <PrivateRout exact path="/add-education" component={AddEducation} />
              </Switch>
              <Switch>
                <PrivateRout exact path="/add-experience" component={AddExperience} />
              </Switch>
              <Switch>
                <PrivateRout exact path="/feed" component={Posts} />
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
