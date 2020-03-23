import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './styles/style.sass';

import Login from './pages/Login';
import Map from './pages/Map';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dash from './pages/Dash';
import Tips from'./pages/Tips';

function HomePage() {
    return <Home />
}

function LoginPage() {
  return <Login />;
}

function SignUpPage() {
  return <Signup />;
}

function MapPage() {
    return <Map />;
}

function DashPage() {
  return <Dash />;
}

function TipsPage() {
  return <Tips />;
}

function AppRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/dash" component={DashPage} />
        <Route exact path="/tips" component={TipsPage} />
      </Switch>
    );
  }
  
  export default function App() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Food Delivery App</title>
        </Helmet>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.Fragment>
  );
  }