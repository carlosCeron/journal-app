import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import AuthRouter from './AuthRouter';
import JournalScreen from './../components/journal/JournalScreen';

const AppRouter = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}

AppRouter.propTypes = {

}

export default AppRouter
