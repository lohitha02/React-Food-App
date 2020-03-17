import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './styles/style.sass';

import Login from './pages/Login';
import Dash from './pages/Dash';
import Signup from './pages/Signup';
import Home from './pages/Home';

function HomePage() {
    return <Home />
}

function LoginPage() {
  return <Login />;
}

function SignUpPage() {
  return <Signup />;
}

function DashboardPage() {
    return <Dash />;
}

function AppRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
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