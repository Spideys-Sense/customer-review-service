import React from 'react';
import styled from 'styled-components';

const StyledReviewAverage = styled.div`
  grid-row: 1;
  grid-column: 1 / span 2;
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
  margin-bottom: 10px;
`

const StyledStarBar = styled.div`
  width: ${props => props.barSize};
  height: 15px;
  background-color: orange;
  border-radius: 3px;
  margin-top: auto;
  margin-bottom: auto;
`

const StyledStarGraphText = styled.div`
  font-size: 13px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const ReviewAverage = ({ reviews, averages }) => (
  <StyledReviewAverage>
    <h2 style={{'margin-top':'0px'}}>Customer Reviews</h2>
    <StyledReviewAverageSubheader>
      <div>IMAGE HERE</div>
      <div style={{'color':'#2e5ee2'}}>{reviews.length} Reviews</div>
      <div>{averages[0]} out of 5 stars</div>
    </StyledReviewAverageSubheader>
    <div>
      <h5 style={{'margin-bottom':'5px'}}><b>Filter reviews by star rating</b></h5>
      <StyledReviewRatingGraph>
        <StyledStarGraphText>5 star</StyledStarGraphText> <StyledStarBar barSize={averages[5]}></StyledStarBar> <StyledStarGraphText>{averages[5]}</StyledStarGraphText>
        <StyledStarGraphText>4 star</StyledStarGraphText> <StyledStarBar barSize={averages[4]}></StyledStarBar> <StyledStarGraphText>{averages[4]}</StyledStarGraphText>
        <StyledStarGraphText>3 star</StyledStarGraphText> <StyledStarBar barSize={averages[3]}></StyledStarBar> <StyledStarGraphText>{averages[3]}</StyledStarGraphText>
        <StyledStarGraphText>2 star</StyledStarGraphText> <StyledStarBar barSize={averages[2]}></StyledStarBar> <StyledStarGraphText>{averages[2]}</StyledStarGraphText>
        <StyledStarGraphText>1 star</StyledStarGraphText> <StyledStarBar barSize={averages[1]}></StyledStarBar> <StyledStarGraphText>{averages[1]}</StyledStarGraphText>
      </StyledReviewRatingGraph>
    </div>
  </StyledReviewAverage>
);

export default ReviewAverage;
