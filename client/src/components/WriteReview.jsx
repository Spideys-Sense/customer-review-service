import React from 'react';
import styled from 'styled-components';

const StyledWriteReview = styled.div`
  grid-row: 1;
  grid-column: 5 / -1;
  border-style: solid;
`;

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
  height: 800px;
  overflow: hidden;
`;

class WriteReview extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }

  }

  render() {
    return (
      <StyledWriteReview>WriteReview</StyledWriteReview>
    );
  };
};

export default WriteReview;
