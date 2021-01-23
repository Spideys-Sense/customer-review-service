import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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
  margin: 5px;
`;

const StyledExitModalX = styled.span`
  font-family: Roboto, serif;
  float: right;
  font-size: 30px;
  color: grey;
`;

const StyledPhotoModalTitle = styled.span`
  font-family: Roboto, serif;
  float: left;
  font-size: 20px;
  font-weight: bold;
`;

const PhotoGalleryModal = ({ isVisible, reviews, hideModal }) => {
  if (isVisible) {
    return (
      <div style={{ display: 'block' }}>
        <StyledModal>
          <StyledModalContent>
            <div style={{ 'margin-bottom': '70px' }}>
              <StyledPhotoModalTitle>Customer Photos ({reviews.length})</StyledPhotoModalTitle>
              <StyledExitModalX onClick={hideModal}>X</StyledExitModalX>
            </div>
            {reviews.map((review) => (
              <StyledImage src={review.imageUrl} alt='Customer Review Image' />
            ))}
          </StyledModalContent>
        </StyledModal>
      </div>
    );
  } else {
    return <div />
  }
};

export default PhotoGalleryModal;