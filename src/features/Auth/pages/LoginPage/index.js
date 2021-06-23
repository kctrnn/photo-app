import { Chip, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'app/userSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',

    '& > *': {
      margin: theme.spacing(1),
    },
  },

  loginAs: {
    fontFamily: `'Poppins', sans-serif`,
  },
}));

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);

      unwrapResult(resultAction);
      history.push('/photos');
    } catch (error) {
      console.log('Failed to login:', error);
    }
  };

  const handleBruhClick = () => {
    const values = {
      identifier: 'bruh@gmail.com',
      password: '123123123',
    };

    handleSubmit(values);
  };

  const handleDavidClick = () => {
    const values = {
      identifier: 'david@gmail.com',
      password: '123123123',
    };

    handleSubmit(values);
  };
  return (
    <div className='auth-login'>
      <h1 className='text-center'>Sign In</h1>

      <LoginForm onSubmit={handleSubmit} />

      <div className={classes.root}>
        <Chip
          icon={<FaceIcon />}
          label='Login as Bruh'
          className={classes.loginAs}
          clickable
          onClick={handleBruhClick}
        />

        <Chip
          avatar={<Avatar>T</Avatar>}
          label='Login as David'
          className={classes.loginAs}
          clickable
          onClick={handleDavidClick}
        />
      </div>
    </div>
  );
};

export default LoginPage;
