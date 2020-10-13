import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Form, Formik, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';

function PhotoForm(props) {
  return (
    <Formik initialValues={{ title: '' }}>
      {({ values, errors, touched }) => (
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

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

export default PhotoForm;
