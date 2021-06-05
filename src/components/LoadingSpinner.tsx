import React from 'react';
import {
  Box, CircularProgress, createStyles, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  root: {
    minHeight: '100vh',
  },
}));
const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={classes.root}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
