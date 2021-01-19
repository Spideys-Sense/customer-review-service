import React from 'react';
import styled from 'styled-components';

const StyledPhotoGallery = styled.div`
  grid-row: 2;
  grid-column: 5;
  border-style: solid;
`

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }

  }

  render() {
    return (
      <StyledPhotoGallery>PhotoGallery</StyledPhotoGallery>
    );
  };
};

export default PhotoGallery;