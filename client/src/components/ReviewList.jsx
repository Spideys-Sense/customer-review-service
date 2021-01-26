import React from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx';

const StyledReviewList = styled.div`
  grid-row: 2;
  grid-column: 1 / span 5;
  padding: 10px;
  list-style-type: none;
  font-family: Roboto, serif;
`;

const StyledReviewListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-size: 90%;
  height: 50%;
  margin-top: auto;
  margin-bottom: auto;
`;

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: row;
  border-color: grey;
  display: inline-block;
`;

const StyledSelectMenu = styled.select`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  margin-right: 10px;
  height: 26px;
  border-color: #c9c9c9;
  background-color: white;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;

const FilterByDropDown = ({ filter, filterReviews }) => (
  <StyledSelectMenu value={filter} onChange={filterReviews}>
    <option value={''}>All stars</option>
    <option value={'5'}>5 stars only</option>
    <option value={'4'}>4 stars only</option>
    <option value={'3'}>3 stars only</option>
    <option value={'2'}>2 stars only</option>
    <option value={'1'}>1 stars only</option>
    <option value={'[4, 5]'}>All positive</option>
    <option value={'[1, 2, 3]'}>All critical</option>
  </StyledSelectMenu>
);

const SortByDropDown = ({ sortBy, sortReviews }) => (
  <StyledSelectMenu value={sortBy} onChange={sortReviews}>
    <option value="newest">Newest</option>
    <option value="oldest">Oldest</option>
    <option value="highest_rating">Highest rating</option>
    <option value="lowest_rating">Lowest rating</option>
  </StyledSelectMenu>
)

const StyledSortMenus = styled.div`
  grid-column: 3 / span 1;
  margin-left: auto;
  margin-right: auto;
`;

class ReviewListHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loadAll) {
      return (
        <StyledReviewListHeader>
          <p>Showing All Reviews</p>
          <StyledSortMenus>
            <StyledDropDown>
              <p style={{ 'display': 'inline-block' }}>Filter by: </p>
              <FilterByDropDown filterReviews={this.props.filterReviews} filter={this.props.filter} />
            </StyledDropDown>
            <StyledDropDown>
              <p style={{ 'display': 'inline-block' }}>Sort by: </p>
              <SortByDropDown sortBy={this.props.sortBy} sortReviews={this.props.sortReviews} />
            </StyledDropDown>
          </StyledSortMenus>
        </StyledReviewListHeader>
      );
    } else {
      return (
        <StyledReviewListHeader>
          <p>Showing 1-5 of {this.props.reviewsLength} Reviews</p>
          <StyledSortMenus>
            <StyledDropDown>
              <p style={{ 'display': 'inline-block' }}>Filter by: </p>
              <FilterByDropDown filter={this.props.filter} filterReviews={this.props.filterReviews} />
            </StyledDropDown>
            <StyledDropDown>
              <p style={{ 'display': 'inline-block' }}>Sort by: </p>
              <SortByDropDown sortBy={this.props.sortBy} sortReviews={this.props.sortReviews} />
            </StyledDropDown>
          </StyledSortMenus>
        </StyledReviewListHeader>
      );
    }
  }
}

const StyledReviewListTitle = styled.h4`
  margin-left: 2.5%;
  text-align: bottom;
  margin-bottom: 0%;
`;

const StyledLine = styled.hr`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLoadAllReviewsButton = styled.button`
  height: 40px;
  width: 210px;
  border: 1px solid #163977;
  color: #163977;
  border-radius: 4px;
  font-size: 15px;
`;

const ReviewList = ({ reviews, loadAll, loadAllReviews, filterReviews, sortReviews, filter, sortBy }) => {
  if (loadAll) {
    return (
      <StyledReviewList>
        <header>
          <StyledReviewListTitle>{reviews.length} Reviews</StyledReviewListTitle>
          <StyledLine />
          <ReviewListHeader reviewsLength={reviews.length} loadAll={loadAll} filterReviews={filterReviews} sortReviews={sortReviews} filter={filter} sortBy={sortBy} />
          <StyledLine />
        </header>

        <main>
          {reviews.map((review) => (
            <div>
              <ReviewListEntry review={review} />
              <StyledLine />
            </div>
          ))}
        </main>
      </StyledReviewList>
    );
  } else {
    const initialReviews = [];
    if (reviews.length > 5) {
      for (let i = 0; i < 5; i++) {
        initialReviews.push(reviews[i]);
      }
    } else {
      reviews.forEach((review) => {
        initialReviews.push(review);
      })
    }
    return (
      <StyledReviewList>
        <header>
          <StyledReviewListTitle>{reviews.length} Reviews</StyledReviewListTitle>
          <StyledLine></StyledLine>
          <ReviewListHeader reviewsLength={reviews.length} loadAll={loadAll} filterReviews={filterReviews} sortReviews={sortReviews} filter={filter} sortBy={sortBy} />
          <StyledLine></StyledLine>
        </header>

        <main>
          {initialReviews.map((review) => (
            <div>
              <ReviewListEntry review={review} />
              <StyledLine></StyledLine>
            </div>
          ))}
        </main>
        <StyledLoadAllReviewsButton onClick={loadAllReviews}>Read All {reviews.length} reviews</StyledLoadAllReviewsButton>
      </StyledReviewList>
    );
  }
};

export default ReviewList;
