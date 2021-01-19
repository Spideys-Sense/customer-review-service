import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styled from 'styled-components';

const StyledReviewList = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
  border-style: solid;
`

const FilterByDropDown = () => (
  <select>
    <option value={[1, 2, 3, 4, 5]}>All stars</option>
    <option value={5}>5 stars only</option>
    <option value={4}>4 stars only</option>
    <option value={3}>3 stars only</option>
    <option value={2}>2 stars only</option>
    <option value={1}>1 stars only</option>
    <option value={[4, 5]}>All positive</option>
    <option value={[1, 2, 3]}>All critical</option>
  </select>
);

const SortByDropDown = () => (
  <select>
    <option value='newest'>Newest</option>
    <option value='oldest'>Oldest</option>
    <option value='highest_rating'>Highest rating</option>
    <option value='lowest_rating'>Lowest rating</option>
  </select>
)

const ReviewList = ({ reviews }) => (
  <StyledReviewList>
    <header>
      <h4>{reviews.length} Reviews</h4>
        <div>
          <p>Showing All Reviews</p>
          <p>Filter by: </p>
          <FilterByDropDown/>
          <p>Sort by: </p>
          <SortByDropDown/>
        </div>
    </header>
    <main>

      {reviews.map((review) => (
        <ReviewListEntry review={review} />
      ))}
    </main>
  </StyledReviewList>
);

export default ReviewList;