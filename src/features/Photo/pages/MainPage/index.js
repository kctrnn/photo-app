import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const MainPage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  };

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;

    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className='photo-main'>
      <Banner title='Your awesome photos 🤚' backgroundUrl={Images.PINK_BG} />

      <section className='photo-list'>
        <Container className='text-center'>
          <Link className='d-block py-5 text-decoration-none' to='/photos/add'>
            Add new photo
          </Link>

          <PhotoList
            photoList={photos}
            onPhotoEditClick={handlePhotoEditClick}
            onPhotoRemoveClick={handlePhotoRemoveClick}
          />
        </Container>
      </section>
    </div>
  );
};

export default MainPage;
