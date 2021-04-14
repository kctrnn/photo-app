import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/PhotoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const AddEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data) =>
    new Promise((resolve) => {
      console.log('Form submit: ', data);

      setTimeout(() => {
        const action = addPhoto(data);
        console.log(action);

        dispatch(action);

        history.push('/photos');
        resolve(true);
      }, 2000);
    });

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 🥰' />

      <PhotoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditPage;
