import React from 'react';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import PhotoGallery from './PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      //
    // }
  }

  render() {
    return (
      <div>
        <div>
          <ReviewAverage />
          <WriteReview />
        </div>
        <div>
          <ReviewList/>
          <PhotoGallery/>
        </div>
      </div>
    )
  }
}

export default App;