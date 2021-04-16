import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { getRandomImgUrl } from 'utils/common';
import './RandomPhoto.scss';

const RandomPhoto = (props) => {
  // { name, value, onBlur, onChange }
  const { name, imageUrl, onRandomButtonBlur, onImageUrlChange } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImgUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className='random-photo'>
      <Button
        variant='success'
        type='button'
        name={name}
        onBlur={onRandomButtonBlur}
        onClick={handleRandomPhotoClick}
      >
        Random a photo
      </Button>

      <div className='random-photo-inner'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt='Ooops ... not found. Please click random again!'
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
};

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onRandomButtonBlur: PropTypes.func,
  onImageUrlChange: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: '',
  onImageUrlChange: null,
  onRandomButtonBlur: null,
  imageUrl: '',
};

export default RandomPhoto;
