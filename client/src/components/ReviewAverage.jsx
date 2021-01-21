import React from 'react';
import styled from 'styled-components';

const StyledReviewAverage = styled.div`
  grid-row: 1;
  grid-column: 1 / span 3;
  border-style: solid;
  font-family: Roboto, serif;
`;

const StyledReviewAverageSubheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`

const StyledReviewRatingGraph = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  border: solid;
`

const StyledStarBar = styled.div`
  width: ${props => props.barSize};
  height: 18px;
  background-color: orange;
  border-radius: 3px;
`

const ReviewAverage = ({ reviews, average }) => (
  <StyledReviewAverage>
    <h2>Customer Reviews</h2>
    <StyledReviewAverageSubheader>
      <div>stars</div>
      <div style={{'color':'#2e5ee2'}}>{reviews.length} Reviews</div>
      <div>{average} out of 5 stars</div>
    </StyledReviewAverageSubheader>
    <div>
      <p>Filter reviews by star rating</p>
      <StyledReviewRatingGraph>
      <div>5</div><StyledStarBar></StyledStarBar><div>%</div>
      <div>hello</div>
      <div>hello</div>
      </StyledReviewRatingGraph>
    </div>
  </StyledReviewAverage>
);

export default ReviewAverage;
