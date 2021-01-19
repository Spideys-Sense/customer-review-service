import React from 'react';
import styled from 'styled-components';

const StyledReviewAverage = styled.div`
  grid-row: 1;
  grid-column: 1 / span 3;
  border-style: solid;
`

let ReviewAverage = (props) => (
  <StyledReviewAverage>ReviewAverage</StyledReviewAverage>
);

export default ReviewAverage;