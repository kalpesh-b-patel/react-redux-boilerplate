import React, { useContext } from 'react';
import {
  Avatar,
  Box, CircularProgress, Container, createStyles, makeStyles, Theme, Typography,
} from '@material-ui/core';
import { AuthContext } from '../../components/AuthProvider';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const user = useContext(AuthContext);

  return user ? (
    <Container>
      <Box mt={3} display="flex" alignItems="center" gridGap={10}>
        <Avatar alt={user.displayName || ''} src={user.photoURL || ''} className={classes.large} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1">{user.displayName}</Typography>
          <Typography variant="subtitle2">{user.email}</Typography>
        </Box>
      </Box>
    </Container>
  ) : <CircularProgress />;
};
export default Profile;
