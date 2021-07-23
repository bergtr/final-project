import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';

function PrivateRoute({ children, ...rest }) {

  const { loggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Landing",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
};

export default PrivateRoute;