import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import RandomPhotoField from 'components/form-controls/RandomPhotoField';
import SelectField from 'components/form-controls/SelectField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './PhotoForm.scss';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  title: yup.string().required('This field is required.'),
  categoryId: yup.number().required('This field is required.').nullable(),
  photo: yup.string().required('This field is required.'),
});

const PhotoForm = ({ onSubmit, defaultValues, isAddMode }) => {
  const form = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <form className='photo-form' onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name='title'
        label='Title'
        form={form}
        placeholder='Eg: Wow nature ...'
      />

      <SelectField
        name='categoryId'
        label='Category'
        form={form}
        options={PHOTO_CATEGORY_OPTIONS}
        placeholder="What's your photo category?"
      />

      <RandomPhotoField name='photo' label='Photo' form={form} />

      <Button
        variant='primary'
        type='submit'
        className='d-flex align-items-center'
      >
        {isAddMode ? 'Add to album' : 'Update your photo'}
        {isSubmitting && (
          <Spinner className='ml-3' animation='grow' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        )}
      </Button>
    </form>
  );
};

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  defaultValues: {},
  isAddMode: false,
};

export default PhotoForm;
