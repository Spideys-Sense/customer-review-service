import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styled from 'styled-components';

const StyledReviewList = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
`

let ReviewList = (props) => (
  <StyledReviewList>
    <ReviewListEntry/>
  </StyledReviewList>
);

export default ReviewList;