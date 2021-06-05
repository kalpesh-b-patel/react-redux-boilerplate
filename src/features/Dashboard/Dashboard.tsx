import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { AuthContext } from '../../components/AuthProvider';

const Dashboard = () => {
  const user = useContext(AuthContext);
  return (
    <Container>
      <Typography>
        Welcome,
        {' '}
        { user?.email}
        !
      </Typography>
    </Container>
  );
};

export default Dashboard;
