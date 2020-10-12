import React from 'react';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 👾' />

      <PhotoForm />
    </div>
  );
}

export default AddEditPage;
