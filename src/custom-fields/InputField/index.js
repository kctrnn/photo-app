import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

InputField.propTypes = {
  field: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
};

function InputField({ field, type, label, placeholder }) {
  const { name } = field; // name, value, onChange, onBlur

  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Control {...field} type={type} placeholder={placeholder} />
    </Form.Group>
  );
}

export default InputField;
