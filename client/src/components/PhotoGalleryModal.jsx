import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledModal = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.75);
  transition: all 0.3s linear;
`;

const StyledModalContent = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  height: 500px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  align-content: center;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  :hover {
    cursor: pointer;
  }
`;

const StyledExitModalX = styled.span`
  font-family: Roboto, serif;
  float: right;
  font-size: 30px;
  color: grey;
  :hover {
    cursor: pointer;
  }
`;

const StyledPhotoModalTitle = styled.span`
  font-family: Roboto, serif;
  float: left;
  font-size: 20px;
  font-weight: bold;
`;

const PhotoGalleryModal = ({
  isVisible, reviews, hideModal, setCurrPhoto,
}) => {
  if (isVisible) {
    return (
      <div style={{
        display: 'block',
      }}
      >
        <StyledModal>
          <StyledModalContent>
            <div style={{
              'margin-bottom': '60px',
            }}
            >
              <StyledPhotoModalTitle>
                Customer Photos
                {' ('}
                {reviews.length}
                {')'}
              </StyledPhotoModalTitle>
              <StyledExitModalX onClick={hideModal}>X</StyledExitModalX>
            </div>
            {reviews.map((review) => (
              <StyledImage onClick={setCurrPhoto} id={review.id} src={review.imageUrl} alt="" />
            ))}
          </StyledModalContent>
        </StyledModal>
      </div>
    );
  }
  return <div />;
};

PhotoGalleryModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideModal: PropTypes.func.isRequired,
  setCurrPhoto: PropTypes.func.isRequired,
};

export default PhotoGalleryModal;
