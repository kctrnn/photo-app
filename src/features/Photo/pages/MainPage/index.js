import React from 'react';
import { Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Images from 'constants/images';

const MainPage = () => {
  return (
    <div className='photo-main'>
      <Banner title='Your awesome photos 🤚' backgroundUrl={Images.PINK_BG} />

      <Link to='/photos/add'>Add new photo</Link>
    </div>
  );
};

export default MainPage;
