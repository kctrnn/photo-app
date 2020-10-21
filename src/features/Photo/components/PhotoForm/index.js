import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Form, Formik, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';

function PhotoForm() {
  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={(values) => console.log('Submit: ', values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <Container>
              <FastField
                name='title'
                component={InputField}
                label='Title'
                placeholder='Eg: Wow nature ...'
              />

              <FastField
                name='categoryId'
                component={SelectField}
                label='Category'
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name='photo'
                component={RandomPhotoField}
                label='Photo'
              />

              <Button variant='info' type='submit'>
                Add to album
              </Button>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
