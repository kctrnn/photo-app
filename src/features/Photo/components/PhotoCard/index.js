import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ photo }) => {
  return (
    <div className='photo'>
      <img src={photo.photo} alt={photo.title} />
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default PhotoCard;
