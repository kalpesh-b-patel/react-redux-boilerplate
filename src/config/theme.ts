import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#134074',
    },
    secondary: {
      main: '#8da9c4',
    },
    error: {
      main: '#df3b57',
    },
    warning: {
      main: '#ffd23f',
    },
    success: {
      main: '#8da9c4',
    },
    info: {
      main: '#eef4ed',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '8px',
        default: {
          variant: 'contained',
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
    },
    MuiCircularProgress: {
      size: 25,
      disableShrink: true,
    },
  },
});

export default theme;
