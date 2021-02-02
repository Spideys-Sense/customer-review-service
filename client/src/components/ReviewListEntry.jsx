import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

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

const StyledClickedLikeButton = styled.button`
  background-color: #0E70BE;
  color: white;
  border: 1px solid #0E70BE;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  height: 35px;
  width: 90px;
`;

const StyledReviewTitle = styled.div`
  font-weight: bold;
  font-size: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: -2%;
  margin-top: 20px;
  height: 30px;
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
`;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    const { clicked } = this.state;
    const { likes } = this.props;
    if (clicked) {
      return <StyledClickedLikeButton>Liked!</StyledClickedLikeButton>;
    }
    return (
      <StyledLikeButton onClick={this.handleClick}>
        {likes}
        {' '}
        likes
      </StyledLikeButton>
    );
  }
}

const ReviewListEntry = ({ review }) => (
  <StyledListEntry>
    <header>
      <StyledReviewTitle>
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

        <h4 style={{ margin: '0px', 'margin-left': '5px' }}><b>{review.title}</b></h4>
      </StyledReviewTitle>

      <StyledReviewAuthor>
        By:
        {' '}
        {review.username}
        {' '}
        on
        {' '}
        {moment(review.date).format('LL')}
      </StyledReviewAuthor>
    </header>

    <main>
      <StyledReviewBody>{review.body}</StyledReviewBody>
      <img
        style={{
          width: '60px',
          height: '60px',
        }}
        src={review.imageUrl}
        alt=""
      />
    </main>

    <footer style={{ 'margin-top': '7px' }}>
      <LikeButton likes={review.likes} />
      <span style={{
        color: 'grey', 'border-bottom': '1px dotted', 'font-size': '11px', 'margin-left': '10px',
      }}
      >
        Report
      </span>
    </footer>
  </StyledListEntry>
);

ReviewListEntry.propTypes = {
  review: PropTypes.objectOf.isRequired,
};

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default ReviewListEntry;
