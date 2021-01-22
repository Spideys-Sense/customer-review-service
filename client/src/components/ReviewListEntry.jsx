import React from 'react';
import styled from 'styled-components';

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
  text-align: center;
  box-sizing: border-box;
`;

const StyledReviewTitle = styled.div`
  font-weight: bold;
  font-size: 90%;
  display: flex;
  flex-flow: row;
  margin-bottom: -3%;
`;
const ReviewListEntry = ({ review }) => {
  const starsUrl = `https://www.chewy.com/assets/img/ratings/rating-${review.rating}_0.svg`;

  return (
    <StyledListEntry>
      <header>
        <StyledReviewTitle>
          <img style={{ 'margin-right': '10px' }} src={starsUrl} alt={review.rating + '  stars'} />

          <h4><b>{review.title}</b></h4>
        </StyledReviewTitle>

        <StyledReviewAuthor>By: {review.username} on {review.date}</StyledReviewAuthor>
      </header>

      <main>
        <StyledReviewBody>{review.body}</StyledReviewBody>
        <img style={{
          'width': '70px',
          'height': 'auto'
        }} src={review.imageUrl} alt='failed to load' />
      </main>

      <footer>
        <StyledLikeButton><b>{review.likes}</b></StyledLikeButton>
        <a href=''>Report</a>
      </footer>
    </StyledListEntry>
  );
};

export default ReviewListEntry;
