import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const LoginScreen = (props) => {
  return (
    <Fragment>
      <h3 className="auth__title">Login</h3>

      <form>
        <input type="text" className='auth__input' placeholder="Email" name="email" />
        <input type="password" className='auth__input' placeholder="Password" name="password" />
        <button className='btn btn-primary btn-block' type="submit"> Login </button>

        <hr />

        <div className="auth__social-networks">

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

        </div>

        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </Fragment>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
