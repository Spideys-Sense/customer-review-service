import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styled from 'styled-components';

const StyledReviewList = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
  border-style: solid;
  padding: 20px;
`

const StyledReviewListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-size: 90%;
  height: 50%;
  margin-top: auto;
  margin-bottom: auto;
`

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledSelectMenu = styled.select`
  margin-top: auto;
  margin-bottom: auto;
  height: 60%;
`

const FilterByDropDown = () => (
  <StyledSelectMenu>
    <option value={[1, 2, 3, 4, 5]}>All stars</option>
    <option value={5}>5 stars only</option>
    <option value={4}>4 stars only</option>
    <option value={3}>3 stars only</option>
    <option value={2}>2 stars only</option>
    <option value={1}>1 stars only</option>
    <option value={[4, 5]}>All positive</option>
    <option value={[1, 2, 3]}>All critical</option>
  </StyledSelectMenu>
);

const SortByDropDown = () => (
  <StyledSelectMenu>
    <option value='newest'>Newest</option>
    <option value='oldest'>Oldest</option>
    <option value='highest_rating'>Highest rating</option>
    <option value='lowest_rating'>Lowest rating</option>
  </StyledSelectMenu>
)

const StyledSortMenus = styled.div`
  display: flex;
  flex-direction: row;
`

const ReviewListHeader = () => (
  <StyledReviewListHeader>
    <p>Showing All Reviews</p>
    <StyledSortMenus>
      <StyledDropDown>
        <p>Filter by: </p>
        <FilterByDropDown />
      </StyledDropDown>
      <StyledDropDown>
        <p>Sort by: </p>
        <SortByDropDown />
      </StyledDropDown>
    </StyledSortMenus>
  </StyledReviewListHeader>
);

const StyledLine = styled.hr`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`

const ReviewList = ({ reviews }) => (
  <StyledReviewList>
    <header>
      <h4 style={{ 'margin-left': '2.5%', 'textAlign': 'bottom' }}>{reviews.length} Reviews</h4>
      <StyledLine></StyledLine>
      <ReviewListHeader />
      <StyledLine></StyledLine>
    </header>

    <main>
      {reviews.map((review) => (
        <ReviewListEntry review={review} />
      ))}
    </main>
  </StyledReviewList>
);

export default ReviewList;