import React from 'react';
import styled from 'styled-components';

const StyledWriteReview = styled.div`
  grid-row: 1;
  grid-column: 5 / -1;
  border-style: solid;
`;

const WriteReview = ({ reviews, showModal }) => (
  <StyledWriteReview>
    <button onClick={showModal}>SHOW MODAL</button>
  </StyledWriteReview>
)

export default WriteReview;
