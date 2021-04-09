import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import React from 'react';
import Select from 'react-select';
import './PhotoForm.scss';

const PhotoForm = (props) => {
  return (
    <form className='photo-form'>
      <div className='photo-form-group'>
        <label className='photo-form-label' htmlFor='title'>
          Title
        </label>

        <input
          type='text'
          className='photo-form-input'
          id='title'
          placeholder='Eg: Wow nature ...'
        />
      </div>

      <div className='photo-form-group'>
        <label className='photo-form-label'>Category</label>

        <Select
          options={PHOTO_CATEGORY_OPTIONS}
          placeholder="What's your photo category?"
        />
      </div>

      <div className='photo-form-group'>
        <label className='photo-form-label'>Photo</label>

        <img src={Images.COLORFUL_BG} height='200px' width='200px' alt='' />
      </div>

      <button type='submit' className='btn' style={{ marginTop: '1.5rem' }}>
        Add to album
      </button>
    </form>
  );
};

PhotoForm.propTypes = {};

export default PhotoForm;
