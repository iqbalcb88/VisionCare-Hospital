import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation='grow' variant='warning' />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email || user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
