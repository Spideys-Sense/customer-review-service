import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledModal = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.75);
  transition: all 0.3s linear;
  z-index: 2;
`;

const StyledModalContent = styled.div`
  display: block;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  max-width: 820px;
  height: 475px;
  overflow: hidden;
  font-family: Roboto, serif;
  z-index: 2;
`;

const StyledExitModalX = styled.span`
  font-family: Roboto, serif;
  float: right;
  font-size: 30px;
  color: grey;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const StyledAllPhotosButton = styled.button`
  height: 35px;
  width: 110px;
  border: 1px solid #163977;
  border-radius: 3px;
  color: #163977;
  font-size: 14px;
  :hover {
    cursor: pointer;
    background: #e6e6fd
  }
`;

const StyledContinueButton = styled.button`
  height: 35px;
  width: 130px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  color: #0E70BE;
  font-size: 14px;
  float: right;
  margin-left: 3px;
  :hover {
    cursor: pointer;
    border: 2px solid #0E70BE;
  }
`;

const StyledReviewModalImage = styled.img`
  height: 410px;
  width: 500px;
  margin-top: 30px;
`;

const StyledReviewTitle = styled.div`
  font-weight: bold;
  font-size: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: -2%;
  margin-top: 30px;
  height: 30px;
`;

const StyledStarImage = styled.div`
  display: block;
  position: absolute;
  color: orange;
  margin: 0px;
  padding: 0px;
  z-index: 3;
  overflow: hidden;
  width: ${(props) => (
    Math.floor((props.rating / 5) * 100).toString().concat('%')
  )};
`;

const StyledEmptyStarImage = styled.div`
  padding: 0;
  display: block;
  z-index: 1;
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

const StyledReviewAuthor = styled.p`
  font-size: 80%;
  color: #555555;
  margin-top: 0px;
`;

const StyledReviewBody = styled.p`
  font-size: 85%;
  margin-top: 30px;
`;

const StyledLikeButton = styled.button`
  color: #555555;
  border: 1px solid #0E70BE;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  height: 35px;
  width: 80px;
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

const LikeButton = ({ clicked, handleClick, likes }) => {
  if (clicked) {
    return <StyledClickedLikeButton>Liked!</StyledClickedLikeButton>
  } else {
    return <StyledLikeButton onClick={handleClick}>{likes} likes</StyledLikeButton>
  }
}

const PhotoPreview = ({ isVisible, hideModal, changeReview, review, setToClicked, clicked}) => {
  if (isVisible) {
    return (
      <StyledModal>
        <StyledModalContent>
          <div>
            <StyledAllPhotosButton>All Photos</StyledAllPhotosButton>

            <StyledExitModalX onClick={hideModal}>X</StyledExitModalX>
            <StyledContinueButton onClick={changeReview}>Next ></StyledContinueButton>
            <StyledContinueButton onClick={changeReview}>Prev </StyledContinueButton>
          </div>

          <div style={{ display: 'flex', 'flex-direction': 'row' }}>
            <StyledReviewModalImage src={review.imageUrl} />
            <span style={{ 'margin-left': '10px', position: 'relative' }}>
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

              <StyledReviewAuthor>By: {review.username} on {moment(review.date).format('LL')}</StyledReviewAuthor>

              <StyledReviewBody>
                {review.body}
              </StyledReviewBody>
              <div style={{ position: 'absolute', bottom: '0' }}>

                <LikeButton handleClick={setToClicked} clicked={clicked} likes={review.likes}>LIKE</LikeButton>
                <span style={{ 'color': 'grey', 'border-bottom': '1px dotted', 'font-size': '11px', 'margin-left': '150px' }}>Report</span>
              </div>
            </span>
          </div>

        </StyledModalContent>
      </StyledModal>
    )
  } else {
    return <div />
  }
}


export default PhotoPreview;
