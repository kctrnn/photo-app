import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import SelectField from 'components/form-controls/SelectField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './PhotoForm.scss';

const schema = yup.object().shape({
  title: yup.string().required('This field is required.'),
  category: yup.number().required('This field is required.').nullable(),
  photo: yup.string().required('This field is required.'),
});

const PhotoForm = (props) => {
  const form = useForm({
    defaultValues: {
      title: '',
      category: null,
      photo: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = form;

  const onSubmit = (data) => console.log('Submit data: ', data);

  return (
    <form className='photo-form' onSubmit={handleSubmit(onSubmit)}>
      <InputField name='title' label='Title' form={form} />

      <SelectField
        name='category'
        label='Category'
        form={form}
        options={PHOTO_CATEGORY_OPTIONS}
        placeholder="What's your photo category?"
      />

      <Button variant='primary' type='submit'>
        Add to album
      </Button>
    </form>
  );
};

PhotoForm.propTypes = {};

export default PhotoForm;
