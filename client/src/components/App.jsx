import React from 'react';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import styled from 'styled-components';
import axios from 'axios';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 5% 95%;
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
        console.log(data);
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
          <ReviewList reviews={this.state.reviews}/>
          <PhotoGallery />
      </StyledApp>
    )
  }
}

export default App;