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
  :hover {
    cursor: pointer;
  }
`;

const PhotoPreview = ({review}) => (
  <StyledModal>
    <StyledModalContent>
      <div>
        <button>All Photos</button>

        <button>Prev </button>
        <button>Next ></button>
        <StyledExitModalX>X</StyledExitModalX>
      </div>

      <img>IMAGE HERE</img>

      <div>
        REVIEWDATA
      </div>

    </StyledModalContent>
  </StyledModal>
)