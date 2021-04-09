import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';

const AddEditPage = () => {
  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 🥰' />

      <PhotoForm />
    </div>
  );
};

export default AddEditPage;
