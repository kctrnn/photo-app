import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'app/userSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
  return (
    <div className='auth-login'>
      <h1 className='text-center'>Sign In</h1>

      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
