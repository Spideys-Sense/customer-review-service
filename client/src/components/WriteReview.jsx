import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWriteReview = styled.div`
  grid-row: 1;
  grid-column: 5 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 65%;
  margin-top: 50px;
`;

const StyledCircle1 = styled.circle`
  width: 110px;
  height: 110px;
  fill: none;
  stroke-width: 7;
  stroke: white;
  transform: translate(5px, 5px);
  cx: 60;
  cy: 60;
  r: 47;
  stroke-dasharray: 300;
  stroke-dashoffset: 0;
`;

const StyledCircle2 = styled.circle`
  width: 110px;
  height: 110px;
  fill: none;
  stroke-width: 7;
  stroke: orange;
  transform: translate(5px, 5px);
  cx: 60;
  cy: 60;
  r: 47;
  stroke-dasharray: 300;
  stroke-dashoffset: calc(300 - (300 * ${(props) => props.rating}) / 100);
`;

const CircleSVG = styled.svg`
  position: relative;
  width: 120px;
  height: 120px;
`;

const StyledPercentRecommended = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const StyledRatingBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-column: 1;
`;

const StyledPercantage = styled.div`
  position: absolute;
  top: 10%;
  left: 32%;
  width: 100%
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPercentageSubtext = styled.div`
  position: absolute;
  top: 63%;
  left: 31%;
  width: 100%
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
`;

const StyledWriteReviewButton = styled.button`
  grid-column: 2;
  height: 40px;
  width: 170px;
  color: #163977;
  border-radius: 4px;
  border-width: 1px;
  border-color: #163977;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

const WriteReview = ({ showModal, percentRecommended }) => (
  <StyledWriteReview>
    <StyledRatingBox>
      <StyledPercentRecommended>
        <CircleSVG>
          <StyledCircle1 />
          <StyledCircle2 rating={percentRecommended} />
        </CircleSVG>
        <StyledPercantage>
          <h2 style={{ 'font-size': '35px', 'font-weight': 'normal' }}>
            {percentRecommended}
            <span style={{ 'font-size': '15px' }}> %</span>
          </h2>
        </StyledPercantage>
        <StyledPercentageSubtext>
          RECOMMEND
        </StyledPercentageSubtext>
      </StyledPercentRecommended>
    </StyledRatingBox>
    <div style={{ 'margin-top': '30px' }}>

      <div style={{
        'grid-column': '2', 'font-size': '11px', 'font-weight': 'bold', 'margin-bottom': '5px',
      }}
      >
        <div>
          {percentRecommended}
          % OF REVIEWERS
        </div>
        <div>RECOMMEND THIS PRODUCT</div>
      </div>
      <StyledWriteReviewButton onClick={showModal}>Write a Review</StyledWriteReviewButton>
    </div>
  </StyledWriteReview>
);

WriteReview.propTypes = {
  showModal: PropTypes.func.isRequired,
  percentRecommended: PropTypes.number.isRequired,
};

export default WriteReview;
