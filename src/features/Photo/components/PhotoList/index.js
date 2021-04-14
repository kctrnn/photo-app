import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PhotoCard from '../PhotoCard';
import PropTypes from 'prop-types';

const PhotoList = ({ photoList }) => {
  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs='12' md='6' lg='3'>
          <PhotoCard photo={photo} />
        </Col>
      ))}
    </Row>
  );
};

PhotoList.propTypes = {
  photoList: PropTypes.array,
};

PhotoList.defaultProps = {
  photoList: [],
};

export default PhotoList;
