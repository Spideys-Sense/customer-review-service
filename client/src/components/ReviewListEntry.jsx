import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledListEntry = styled.li`
  font-family: Roboto, serif;
`;

const StyledReviewAuthor = styled.p`
  font-size: 80%;
  color: #555555;
  margin-bottom: -1.15%;
`;

const StyledReviewBody = styled.p`
  font-size: 85%;
`;

const StyledLikeButton = styled.button`
  color: #555555;
  border: 1px solid #bebebe;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  height: 35px;
  width: 90px;
  :hover {
    cursor: pointer;
    border: 1px solid #0E70BE;
    color: #0E70BE;
  }
`;

const StyledReviewTitle = styled.div`
  font-weight: bold;
  font-size: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: -3%;
  height: 50px;
`;

const StyledStarImage = styled.div`
  display: block;
  position: absolute;
  color: orange;
  margin: 0px;
  padding: 0px;
  z-index: 1;
  overflow: hidden;
  width: ${(props) => (
    Math.floor((props.rating / 5) * 100).toString().concat('%')
  )};
`;

const StyledEmptyStarImage = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
  margin: 0px;
`;

const StyledStarRating = styled.span`
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 15px;
  width: 67px;
  height: 10px;
  margin: 0px;
  position: relative;
  padding: 0;
  /* text-shadow: 0px 1px 0 #a2a2a2; */
`;

const ReviewListEntry = ({ review }) => {
  const starsUrl = `https://www.chewy.com/assets/img/ratings/rating-${review.rating}_0.svg`;

  return (
    <StyledListEntry>
      <header>
        <StyledReviewTitle>
          {/* <img style={{ 'margin-right': '10px' }} src={starsUrl} alt={review.rating + '  stars'} /> */}
          <StyledStarRating>
            <StyledStarImage rating={review.rating}>
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

          <h4><b>{review.title}</b></h4>
        </StyledReviewTitle>

        <StyledReviewAuthor>By: {review.username} on {moment(review.date).format('LL')}</StyledReviewAuthor>
      </header>

      <main>
        <StyledReviewBody>{review.body}</StyledReviewBody>
        <img style={{
          'width': '70px',
          'height': 'auto'
        }} src={review.imageUrl} alt='failed to load' />
      </main>

      <footer style={{ 'margin-top': '7px' }}>
        <StyledLikeButton><b>{review.likes} likes</b></StyledLikeButton>
        <span style={{ 'color': 'grey', 'border-bottom': '1px dotted', 'font-size': '11px', 'margin-left': '10px' }}>Report</span>
      </footer>
    </StyledListEntry>
  );
};

export default ReviewListEntry;
