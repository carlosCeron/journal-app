import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './../components/auth/LoginScreen';
import RegisterScreen from './../components/auth/RegisterScreen';

const AuthRouter = props => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginScreen} />
      <Route exact path="/auth/register" component={RegisterScreen} />
      <Redirect to="/auth/login" />
    </Switch>
  )
}

AuthRouter.propTypes = {

}

export default AuthRouter
