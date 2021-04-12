import React from 'react';
import { Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Images from 'constants/images';
import { Container } from 'react-bootstrap';
import PhotoList from 'features/Photo/components/PhotoList';

const MainPage = () => {
  return (
    <div className='photo-main'>
      <Banner title='Your awesome photos 🤚' backgroundUrl={Images.PINK_BG} />

      <section className='photo-list'>
        <Container className='text-center'>
          <Link className='d-block py-5 text-decoration-none' to='/photos/add'>
            Add new photo
          </Link>

          <PhotoList />
        </Container>
      </section>
    </div>
  );
};

export default MainPage;
