import { ErrorMessage } from '@hookform/error-message';
import PropTypes from 'prop-types';
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const SelectField = ({ name, label, form, options, placeholder }) => {
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
        render={({ field: { onChange, value }, field }) => {
          // https://stackoverflow.com/questions/62795886/returning-correct-value-using-react-select-and-react-hook-form

          const seletedOption = options.find(
            (option) => option.value === value
          );

          return (
            <Select
              {...field}
              value={seletedOption}
              onChange={(selectedOption) => onChange(selectedOption.value)}
              options={options}
              placeholder={placeholder}
              className={errors[name] ? 'is-invalid' : ''}
            />
          );
        }}
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

SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  placeholder: '',
  options: [],
};

export default SelectField;
