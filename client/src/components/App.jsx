import React from 'react';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import styled from 'styled-components';

// const unstyledApp = () => (
//   <div>
//     <div>
//       <ReviewAverage />
//       <WriteReview />
//     </div>
//     <div>
//       <ReviewList />
//       <PhotoGallery />
//     </div>
//   </div>
// );

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 50% 50%;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      //
    // }
  }

  render() {
    return (
      <StyledApp>
          <ReviewAverage />
          <WriteReview />
          <ReviewList />
          <PhotoGallery />
      </StyledApp>
    )
  }
}

export default App;