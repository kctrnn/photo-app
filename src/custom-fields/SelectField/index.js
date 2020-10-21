import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  options: [],
};

function SelectField({ field, options, label, placeholder }) {
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}

      <Select
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={options}
      />
    </Form.Group>
  );
}

export default SelectField;
