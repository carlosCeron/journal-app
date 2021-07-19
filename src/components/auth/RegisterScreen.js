import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const RegisterScreen = (props) => {
  return (
    <Fragment>
      <h3 className="auth__title">Register</h3>

      <form>
        <input type="text" className="auth__input" placeholder="Name" name="name" />
        <input type="text" className="auth__input" placeholder="Email" name="email" />
        <input type="password" className="auth__input" placeholder="Password" name="password" />
        <input type="password" className="auth__input" placeholder="Confirm password" name="password" />
        <button className="btn btn-primary btn-block" type="submit">Login</button>
        <hr />
        <Link className="link" to="/auth/login">
          <p className='mt-3'>Already registered?</p>
        </Link>
      </form>
    </Fragment>
  );
};

RegisterScreen.propTypes = {};

export default RegisterScreen;
