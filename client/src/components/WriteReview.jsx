import React from 'react';
import styled from 'styled-components';

const StyledWriteReview = styled.div`
  grid-row: 1;
  grid-column: 5 / -1;
  border-style: solid;
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
