import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PhotoCard from '../PhotoCard';

const PhotoList = ({ photoList, onPhotoEditClick, onPhotoRemoveClick }) => {
  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs='12' md='6' lg='3'>
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
};

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

export default PhotoList;
