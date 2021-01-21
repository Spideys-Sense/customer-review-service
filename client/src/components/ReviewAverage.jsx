import React from 'react';
import styled from 'styled-components';

const StyledReviewAverage = styled.div`
  grid-row: 1;
  grid-column: 1 / span 3;
  border-style: solid;
`;

const ReviewAverage = () => (
  <StyledReviewAverage>
    <h1>title</h1>
    <div>
      <div>stars | </div>
      <div># of reviews | </div>
      <div>average rating</div>
    </div>
    <div>
      <p>Filter reviews by star rating</p>
      <div>star ratings</div>
    </div>
  </StyledReviewAverage>
);

export default ReviewAverage;
