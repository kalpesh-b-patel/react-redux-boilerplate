import {
  Box, Button, CircularProgress, createStyles, Grid, makeStyles, Paper, TextField, Theme,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { login, loginWithGoogle } from '../../services/Auth';
import { AuthError } from '../../constants/constants';

type FormInputs = {
  email: string,
  password: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    marginTop: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
    },
  },
  error: {
    borderColor: theme.palette.error.main,
    border: '1px solid',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const {
    control, handleSubmit, formState: { errors },
  } = useForm<FormInputs>();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    const { email, password } = data;
    const result = await login(email, password);
    setLoading(false);

    if (!result.success) {
      const { code } = result.data;
      let message = '';
      switch (code) {
        case AuthError.USER_NOT_FOUND:
          message = 'User not found with that email address!';
          break;
        case AuthError.INVALID_EMAIL:
          message = 'Invalid email!';
          break;
        case AuthError.INVALID_PASSWORD:
        case AuthError.WRONG_PASSWORD:
          message = 'Invalid password!';
          break;
        case AuthError.TOO_MANY_REQUESTS:
          message = 'Access to this account has been temporarily disabled due to too many requests!';
          break;
        default:
          message = 'Login failed!';
          break;
      }
      enqueueSnackbar(message, { variant: 'error' });
    } else {
      history.push('/');
    }
  };

  const onLoginWithGoogle = async () => {
    const result: any = await loginWithGoogle();

    if (!result.success) {
      enqueueSnackbar(result.data, { variant: 'error' });
    } else {
      history.push('/');
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xl={3} lg={4} md={5} sm={6} xs={12}>
        <Box>
          <Paper className={classes.paper}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              display="flex"
              flexDirection="column"
              gridGap={10}
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} error={!!errors.email} label="Email" />}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <TextField type="password" {...field} error={!!errors.password} label="Password" />}
              />

              <Button type="submit" disabled={loading}>{ loading ? <CircularProgress /> : 'Login'}</Button>
              <Button type="button" onClick={onLoginWithGoogle}>Login with Google</Button>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
