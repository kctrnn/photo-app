import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './LoginForm.scss';

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required('Please enter your email.')
    .email('Please enter a valid email address.'),
  password: yup.string().required('Please enter your password'),
});

const LoginForm = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name='identifier'
        label='Email'
        form={form}
        placeholder='Email'
      />

      <InputField
        name='password'
        label='Password'
        form={form}
        placeholder='Password'
        type='password'
      />

      <Button variant='primary' type='submit' disabled={isSubmitting}>
        Sign in
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: null,
};

export default LoginForm;
