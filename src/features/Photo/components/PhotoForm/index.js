import React from 'react';
import Select from 'react-select';
import { Container, Form, Button } from 'react-bootstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';

function PhotoForm(props) {
  return (
    <Form>
      <Container>
        <Form.Group controlId='titleId'>
          <Form.Label>Title</Form.Label>
          <Form.Control class='title' placeholder='Eg: Wow nature ...' />
        </Form.Group>

        <Form.Group controlId='categoryId'>
          <Form.Label>Category</Form.Label>
          <Select
            id='categoryId'
            class='categoryId'
            options={PHOTO_CATEGORY_OPTIONS}
            placeholder="What's your photo category?"
          />
        </Form.Group>

        <Form.Group controlId='categoryId'>
          <Form.Label>Photo</Form.Label>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Container>
    </Form>
  );
}

export default PhotoForm;
