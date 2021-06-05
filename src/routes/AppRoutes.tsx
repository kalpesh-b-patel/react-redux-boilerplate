import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../features/Profile/Profile';
import Dashboard from '../features/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <ProtectedRoute path="/profile">
      <Profile />
    </ProtectedRoute>
    <ProtectedRoute exact path="/">
      <Dashboard />
    </ProtectedRoute>
  </Switch>
);

export default withRouter(AppRoutes);
