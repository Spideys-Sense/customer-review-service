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
  z-index: 2;
`;

const StyledModalContent = styled.div`
  display: block;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  max-width: 700px;
  height: 600px;
  overflow: hidden;
  font-family: Roboto, serif;
  z-index: 2;
`;

const StyledExitModalX = styled.span`
  font-family: Roboto, serif;
  float: right;
  font-size: 30px;
  color: grey;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const StyledAllPhotosButton = styled.button`
  height: 35px;
  width: 110px;
  border: 1px solid #163977;
  border-radius: 3px;
  color: #163977;
  font-size: 14px;
  :hover {
    cursor: pointer;
    background: #e6e6fd
  }
`;

const StyledContinueButton = styled.button`
  height: 35px;
  width: 130px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  color: #0E70BE;
  font-size: 14px;
  float: right;
  margin-left: 3px;
  :hover {
    cursor: pointer;
    border: 2px solid #0E70BE;
  }
`;

const PhotoPreview = ({review, isVisible, hideModal}) => {
  if (isVisible) {
    return (
  <StyledModal>
    <StyledModalContent>
      <div>
        <StyledAllPhotosButton>All Photos</StyledAllPhotosButton>

        <StyledExitModalX onClick={hideModal}>X</StyledExitModalX>
        <StyledContinueButton>Next ></StyledContinueButton>
        <StyledContinueButton>Prev </StyledContinueButton>
      </div>

      {/* <img>IMAGE HERE</img> */}

      <div>
        <img src={review.imageUrl} />
      </div>

    </StyledModalContent>
  </StyledModal>
    )
  } else {
    return <div />
  }
}


export default PhotoPreview;