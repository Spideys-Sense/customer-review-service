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
    padding: 50px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1100px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      loadAll: false
    }
    this.loadAllReviews = this.loadAllReviews.bind(this);
  }

  componentDidMount() {
    return axios.get(`/api/5/reviews/?sort_by=${'newest'}&rating=${''}`)
      .then(({ data }) => {
        this.setState({
          reviews: data
        })
      })
  }

  loadAllReviews() {
    if(this.state.loadAll) {
      this.setState({
        loadAll: false
      })
    } else {
      this.setState({
        loadAll: true
      })
    }
  }

  render() {
    return (
      <StyledApp>
        <ReviewAverage />
        <WriteReview />
        <ReviewList loadAllReviews={this.loadAllReviews} loadAll={this.state.loadAll} reviews={this.state.reviews}/>
        <PhotoGallery />
      </StyledApp>
    )
  }
}

export default App;
/*
padding margins width/height
using grid/flexbox
border: thin solid black
*/