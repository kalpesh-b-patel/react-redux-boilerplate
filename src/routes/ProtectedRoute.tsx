import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';

interface Props {
    children: React.ReactNode;
    path: string;
    exact?: boolean;
}
const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => (auth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};
export default PrivateRoute;
