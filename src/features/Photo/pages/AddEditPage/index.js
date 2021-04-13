import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import { useParams } from 'react-router';

const AddEditPage = () => {
  const { photoId } = useParams();

  // const isAddMode = !photoId;

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 🥰' />

      <PhotoForm />
    </div>
  );
};

export default AddEditPage;
