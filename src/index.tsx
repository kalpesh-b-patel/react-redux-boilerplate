import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import { store } from './store/store';
import { AuthProvider } from './components/AuthProvider';
import theme from './config/theme';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
