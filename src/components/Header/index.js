import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='container header-inner'>
        <a
          href='https://github.com/kctrnn/photo-app'
          target='_blank'
          rel='noreferrer'
          className='header-logo'
        >
          Photo App
        </a>

        <Link className='header-link' to='/photos'>
          Redux Project
        </Link>
      </div>
    </div>
  );
};

export default Header;
