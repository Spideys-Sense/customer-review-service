import React from 'react';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import styled from 'styled-components';
import axios from 'axios';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 50% 50%;
    border-style: solid;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    return axios.get(`/api/5/reviews/?sort_by=${'newest'}&rating=${''}`)
      .then(({ data }) => {
        this.setState({
          reviews: data
        })
      })
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