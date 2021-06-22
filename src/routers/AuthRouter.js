import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "./../components/auth/LoginScreen";
import RegisterScreen from "./../components/auth/RegisterScreen";

const AuthRouter = (props) => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

AuthRouter.propTypes = {};

export default AuthRouter;
