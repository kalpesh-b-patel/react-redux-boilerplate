import React, { useContext } from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { AuthContext } from '../../components/AuthProvider';

const Dashboard = () => {
  const user = useContext(AuthContext);
  return (
    <Container>
	    <Paper>
        <Typography>
          Welcome,
          {' '}
          { user?.email}
          !
        </Typography>
      </Paper>
    </Container>
  );
};

export default Dashboard;
