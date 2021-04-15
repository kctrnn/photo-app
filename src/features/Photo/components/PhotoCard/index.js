import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import './PhotoCard.scss';

const PhotoCard = ({ photo, onEditClick, onRemoveClick }) => {
  const handleEditClick = () => {
    if (onEditClick) {
      onEditClick(photo);
    }
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) {
      onRemoveClick(photo);
    }
  };

  return (
    <div className='photo'>
      <img src={photo.photo} alt={photo.title} className='photo-image' />

      <div className='photo-overlay'>
        <h3 className='photo-title'>{photo.title}</h3>

        <div className='photo-buttons'>
          <Button variant='outline-light' onClick={handleEditClick}>
            Edit
          </Button>

          <Button variant='outline-danger' onClick={handleRemoveClick}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

export default PhotoCard;
