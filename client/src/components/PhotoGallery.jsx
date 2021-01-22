import React from 'react';
import styled from 'styled-components';

const StyledPhotoGallery = styled.div`
  grid-row: 2;
  grid-column: 6 / -1;
  display: grid;
  grid-template-rows: 1fr 2.5fr;
  grid-template-columns: none;
  margin-bottom: 1100px;
`;

const StyledSeeAllPhotos = styled.span`
  color: #0E70BE;
  :hover {
    cursor: pointer;
  }
  text-decoration: underline;
  font-size: 12px;
  float: right;
  margin-bottom: 0px;
  margin-top: 32px;
  grid-row: 1;
  grid-column: 1;
  text-align: right;
`;

const StyledCustomerPhotosTitle = styled.span`
  margin-bottom: 0px;
  margin-top: 32px;
  font-weight: bold;
  font-size: 14px;
  grid-row: 1;
  grid-column: 1;
`;

const StyledPhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-row: 2;
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  align-content: center;
  margin-bottom: 9px;
  margin-top: 9px;
  margin-left: 0;
  margin-right: 0;
`;

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }

  }

  render() {
    return (
      <StyledPhotoGallery>
        <StyledCustomerPhotosTitle>Customer Photos</StyledCustomerPhotosTitle>
        <StyledSeeAllPhotos>See All Photos</StyledSeeAllPhotos>
        <StyledPhotoGrid>
          {this.props.reviews.slice(0, 8).map((review) => (
            <StyledImage src={review.imageUrl} alt='failed to load' />
          ))}
        </StyledPhotoGrid>
      </StyledPhotoGallery>
    );
  };
};

export default PhotoGallery;