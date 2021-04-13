import { ErrorMessage } from '@hookform/error-message';
import RandomPhoto from 'components/RandomPhoto';
import PropTypes from 'prop-types';
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const RandomPhotoField = (props) => {
  const { name, label, form } = props;

  const {
    control,
    formState: { errors },
  } = form;

  const handleImageUrlChange = (newImageUrl) => {
    form.setValue(name, newImageUrl);
  };

  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}

      <Controller
        name={name}
        control={control}
        render={({ field: { value, name, onBlur } }) => (
          <RandomPhoto
            name={name}
            imageUrl={value}
            onRandomButtonBlur={onBlur}
            onImageUrlChange={handleImageUrlChange}
          />
        )}
      />

      <div className={errors[name] ? 'is-invalid' : ''}></div>

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

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

export default RandomPhotoField;
