import React from 'react';
import styled from 'styled-components';

const StyledListEntry = styled.li`
  font-family: Roboto, serif;
`

const StyledReviewAuthor = styled.p`
  font-size: 80%;
  color: #555555;
`

const StyledReviewBody = styled.p`
  font-size: 85%;
`

const StyledLikeButton = styled.button`
  background-color: white;
  color: #555555;
  border-color:grey;
`

const StyledReviewTitle = styled.div`
  font-weight: bold;
  font-size: 100%;
  display: flex;
  flex-flow: row;
`

let ReviewListEntry = ({review}) => {
  const starsUrl = `https://www.chewy.com/assets/img/ratings/rating-${review.rating}_0.svg`
  return (
    <StyledListEntry>
    <header>
      <StyledReviewTitle>
        <img src={starsUrl}></img>

        <h4 >{review.title}</h4>
      </StyledReviewTitle>

      <StyledReviewAuthor>By: {review.username} on {review.date}</StyledReviewAuthor>
    </header>

    <main>
      <StyledReviewBody>{review.body}</StyledReviewBody>
      {/* image needs to be smaller */}
      <img style={{'width': '70px',
  'height': 'auto'}} src={review.imageUrl}></img>
    </main>

    <footer>
      <StyledLikeButton>{review.likes} likes</StyledLikeButton>
      <a href=''>Report</a>
    </footer>
  </StyledListEntry>
  )
}

export default ReviewListEntry;