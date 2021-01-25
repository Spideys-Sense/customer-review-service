import React from 'react';
import styled from 'styled-components';

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
`;

const StyledModalContent = styled.div`
  display: block;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  max-width: 700px;
  height: 800px;
  overflow: hidden;
  font-family: Roboto, serif;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  ::placeholder {
    font-size: 12px;
  }
`;

const StyledTextArea = styled.textarea`
  font-family: Roboto, serif
  margin-bottom: 10px;
  resize: vertical;
  min-height: 100px;
  max-height: 300px;
  ::placeholder {
    font-size: 12px;
    font-family: Roboto, serif
  }
`;

const StyledPreviewButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 4px;
  background-color: #EF6C00;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border: none;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

const StyledAddPhotoButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 4px;
  color: #163977;
  font-size: 15px;
  border-color: #163977;
  :hover {
    cursor: pointer;
  }
`;

const CameraIcon = styled.svg`
    width:  30px;
    height: 24px;
    vertical-align: -6px;
    margin: -3px 8px 0 0;
`;

const StyledStarRatingDiv = styled.div`
  color: orange;
`;

const StyledStarRatingSpan = styled.span`
  :hover {
    cursor: pointer;
  }
`;

class WriteReviewModal extends React.Component {
  //showModal, hideModal, isVisible
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      username: null,
      body: null,
      date: null,
      rating: null,
      likes: null,
      imageUrl: null,
      rating: null,
    }
    this.setRating = this.setRating.bind(this);
  }

  setRating(event) {
    let clickedElement = event.target;
    let currElement = clickedElement;
    let rating = event.target.id;
    while (currElement) {
      currElement.innerHTML = '★';
      currElement = currElement.previousSibling;
    }
    currElement = clickedElement.nextSibling;
    while(currElement) {
      currElement.innerHTML = '☆';
      currElement = currElement.nextSibling;
    }
    this.setState({
      rating,
    })
  }

  render() {
    if (this.props.isVisible) {
      return (
        <StyledModal>
          <StyledModalContent>
            <div style={{ 'font-size': '15px', 'padding-bottom': '10px' }}>Item Title</div>
            <span style={{ 'font-size': '12px' }}>Rate this item:</span>
            <span>
              <StyledStarRatingDiv>
                <StyledStarRatingSpan onClick={this.setRating} id='1'>☆</StyledStarRatingSpan>
                <StyledStarRatingSpan onClick={this.setRating} id='2'>☆</StyledStarRatingSpan>
                <StyledStarRatingSpan onClick={this.setRating} id='3'>☆</StyledStarRatingSpan>
                <StyledStarRatingSpan onClick={this.setRating} id='4'>☆</StyledStarRatingSpan>
                <StyledStarRatingSpan onClick={this.setRating} id='5'>☆</StyledStarRatingSpan>
              </StyledStarRatingDiv>
            </span>
            <StyledForm>
              <StyledInput type='text' placeholder='Nickname'></StyledInput>
              <StyledInput type='text' placeholder='Headline for your review'></StyledInput>
              <StyledTextArea placeholder='Your Review'></StyledTextArea>
            </StyledForm>
            <StyledPreviewButton>Preview</StyledPreviewButton>
            <StyledAddPhotoButton>
              <CameraIcon viewBox="0 0 512 512">
                <path d="m441 88l-190 0-25-29-110 0-25 29-20 0c-33 0-59 26-59 59l0 241c0 33 26 60 59 60l370 0c33 0 59-27 59-60l0-239c0-33-26-61-59-61z m15 302c0 8-7 16-17 16l-368 0c-8 0-16-6-16-16l0-241c0-9 6-17 16-17l38 0 25-28 72 0 25 28 210 0c8 0 16 7 16 17l0 241z m-200-13c-58 0-104-47-104-104 0-58 46-105 104-105 58 0 104 47 104 105 0 57-46 104-104 104z m0-176c-40 0-71 32-71 72 0 39 31 71 71 71 40 0 71-32 71-71 0-40-31-72-71-72z m160-11c0-11-9-20-20-20-11 0-19 9-19 20 0 11 8 20 19 20 11 0 20-9 20-20z" />
              </CameraIcon>
              ADD PHOTO
            </StyledAddPhotoButton>
          </StyledModalContent>
        </StyledModal>
      )
    } else {
      return <div />
    }
  }
}

export default WriteReviewModal;