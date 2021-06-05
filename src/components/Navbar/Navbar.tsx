import {
  AppBar,
  Container,
  createStyles,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Theme,
  Button,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { logout } from '../../services/Auth';

const useStyles = makeStyles((theme: Theme) => createStyles({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const currentUser = useContext(AuthContext);
  const history = useHistory();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to="/" className={classes.link}>Boilerplate</Link>
          </Typography>

          <Box display="flex" flexDirection="row" gridGap={5} alignItems="center">
            {currentUser && <Link to="/profile" className={classes.link}>Profile</Link>}
            {!currentUser && <Button onClick={() => { history.push('/login'); }}>Login</Button>}
            {!currentUser && <Button color="secondary" onClick={() => { history.push('/signup'); }}>Signup</Button>}
            {currentUser && <Button onClick={logout}>Logout</Button>}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
