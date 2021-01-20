import React from 'react';
import styled from 'styled-components';

const StyledListEntry = styled.li`
  font-family: Roboto, serif;
`

let ReviewListEntry = ({review}) => (
  <StyledListEntry>
    <header>
      <div>
        {/*image with # of stars*/}
        <h4>{review.title}</h4>
      </div>

      <p>By: {review.username} on {review.date}</p>
    </header>

    <main>
      <p>{review.body}</p>
      {/* image needs to be smaller */}
      <img src={review.imageUrl}></img>
    </main>

    <footer>
      <button>{review.likes} likes</button>
      <a href=''>Report</a>
    </footer>
  </StyledListEntry>
);

export default ReviewListEntry;