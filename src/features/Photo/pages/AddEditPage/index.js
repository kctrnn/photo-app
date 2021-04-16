import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { randomNumber } from 'utils/common';

const AddEditPage = () => {
  const dispatch = useDispatch();
  const photoList = useSelector((state) => state.photos);
  const history = useHistory();

  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editPhoto = photoList.find((photo) => photo.id === +photoId);

  const defaultValues = isAddMode
    ? {
        title: '',
        category: null,
        photo: '',
      }
    : editPhoto;

  const handleSubmit = (data) =>
    new Promise((resolve) => {
      console.log('Form submit: ', data);

      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...data,
            id: randomNumber(10000, 99999),
          };

          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(data);
          dispatch(action);
        }

        history.push('/photos');
        resolve(true);
      }, 2000);
    });

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 🥰' />

      <PhotoForm
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
        isAddMode={isAddMode}
      />
    </div>
  );
};

export default AddEditPage;
