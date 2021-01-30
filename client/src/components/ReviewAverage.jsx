import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledReviewAverage = styled.div`
  grid-row: 1;
  grid-column: 1 / span 3;
  font-family: Roboto, serif;
`;

const StyledReviewAverageSubheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
  font-size: 13px;
`;

const StyledReviewRatingGraph = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  width: 80%;
  margin-bottom: 10px;
`;

const StyledStarBar = styled.div`
  width: ${(props) => props.barSize};
  height: 15px;
  background-color: orange;
  border-radius: 3px;
  margin-top: auto;
  margin-bottom: auto;
`;

const StyledStarGraphText = styled.div`
  font-size: 11px;
  font-weight: bold;
  color: #0E70BE;
  margin-top: 3px;
  margin-bottom: 3px;
  :hover {
    cursor: pointer;
  }
`;

const StyledStarImage = styled.div`
  display: block;
  position: absolute;
  color: orange;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0px;
  z-index: 1;
  overflow: hidden;
  width: ${(props) => (
    Math.floor((props.averageRating / 5) * 100).toString().concat('%')
  )};
`;

const StyledEmptyStarImage = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
`;

const StyledStarRating = styled.span`
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 15px;
  width: 67px;
  margin: 0px 0px 0px 0px;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
`;

const StyledTotalReviewCount = styled.span`
  color: #0E70BE;
  cursor: pointer;
  text-decoration: underline;
`;

const ReviewRatingGraph = ({ averages, filterReviews }) => (
  <StyledReviewRatingGraph>
    <StyledStarGraphText onClick={filterReviews} value="5">5 star</StyledStarGraphText>
    <StyledStarBar barSize={averages[5]} />
    <StyledStarGraphText>{averages[5]}</StyledStarGraphText>
    <StyledStarGraphText onClick={filterReviews} value="4">4 star</StyledStarGraphText>
    <StyledStarBar barSize={averages[4]} />
    <StyledStarGraphText>{averages[4]}</StyledStarGraphText>
    <StyledStarGraphText onClick={filterReviews} value="3">3 star</StyledStarGraphText>
    <StyledStarBar barSize={averages[3]} />
    <StyledStarGraphText>{averages[3]}</StyledStarGraphText>
    <StyledStarGraphText onClick={filterReviews} value="2">2 star</StyledStarGraphText>
    <StyledStarBar barSize={averages[2]} />
    <StyledStarGraphText>{averages[2]}</StyledStarGraphText>
    <StyledStarGraphText onClick={filterReviews} value="1">1 star</StyledStarGraphText>
    <StyledStarBar barSize={averages[1]} />
    <StyledStarGraphText>{averages[1]}</StyledStarGraphText>
  </StyledReviewRatingGraph>
);

const ReviewAverageSubheader = ({ reviews, averages, loadAllReviews }) => (
  <StyledReviewAverageSubheader>
    <StyledStarRating>
      <StyledStarImage averageRating={averages[0]}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </StyledStarImage>
      <StyledEmptyStarImage>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </StyledEmptyStarImage>
    </StyledStarRating>
    <StyledTotalReviewCount onClick={loadAllReviews}>
      {reviews.length}
      {' '}
      Reviews
    </StyledTotalReviewCount>
    <span style={{ color: '#666666' }}>
      {averages[0]}
      {' '}
      out of 5 stars
    </span>
  </StyledReviewAverageSubheader>
);

const ReviewAverage = ({
  reviews, averages, loadAllReviews, filterReviews,
}) => (
  <StyledReviewAverage>
    <h2 style={{ 'margin-top': '0px' }}>Customer Reviews</h2>
    <ReviewAverageSubheader
      reviews={reviews}
      averages={averages}
      loadAllReviews={loadAllReviews}
    />
    <div>
      <h5 style={{ 'margin-bottom': '5px' }}><b>Filter reviews by star rating</b></h5>
      <ReviewRatingGraph filterReviews={filterReviews} averages={averages} />
    </div>
  </StyledReviewAverage>
);

ReviewAverage.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  averages: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadAllReviews: PropTypes.func.isRequired,
  filterReviews: PropTypes.func.isRequired,
};

ReviewAverageSubheader.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  averages: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadAllReviews: PropTypes.func.isRequired,
};

ReviewRatingGraph.propTypes = {
  averages: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterReviews: PropTypes.func.isRequired,
};

export default ReviewAverage;
