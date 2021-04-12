import { ErrorMessage } from '@hookform/error-message';
import PropTypes from 'prop-types';
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { name, label, form } = props;
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}

      <Controller
        name={name}
        control={control}
        // field: { name: '', value='', onChange: ƒ, onBlur: ƒ, ref: ƒ }
        render={({ field }) => (
          <Form.Control
            {...field}
            type='text'
            isInvalid={!!errors[name]}
            placeholder='Eg: Wow nature ...'
            autoComplete='off'
          />
        )}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <FormControl.Feedback type='invalid'>{message}</FormControl.Feedback>
        )}
      />
    </Form.Group>
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

export default InputField;
