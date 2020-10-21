import RandomPhoto from 'components/RandomPhoto';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: '',
};

function RandomPhotoField({ field, form, label }) {
  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </Form.Group>
  );
}

export default RandomPhotoField;
