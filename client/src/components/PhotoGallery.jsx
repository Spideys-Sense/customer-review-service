import React from 'react';
import styled from 'styled-components';
import PhotoGalleryModal from './PhotoGalleryModal.jsx';

const StyledPhotoGallery = styled.div`
  grid-row: 2;
  grid-column: 6 / -1;
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
  margin-top: 10px;
  margin-bottom: auto;
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

const PhotoGalleryHeader = styled.div`
  margin-top: 32px;
  max-height: 100px;
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
        <PhotoGalleryHeader>
          <StyledCustomerPhotosTitle>Customer Photos</StyledCustomerPhotosTitle>
          <StyledSeeAllPhotos onClick={this.props.showModal}>See All Photos</StyledSeeAllPhotos>
        </PhotoGalleryHeader>
        <StyledPhotoGrid>
          {this.props.reviews.slice(0, 8).map((review) => (
            <StyledImage onClick={this.props.setCurrPhoto} id={review.id} src={review.imageUrl} alt='failed to load' />
          ))}
        </StyledPhotoGrid>
      </StyledPhotoGallery>
    );
  };
};

export default PhotoGallery;