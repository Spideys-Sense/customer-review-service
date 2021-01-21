import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import PhotoGallery from './PhotoGallery.jsx';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 20% 80%;
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
      averages: [],
      loadAll: false,
    };

    this.loadAllReviews = this.loadAllReviews.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getReviewAverages = this.getReviewAverages.bind(this);
  }

  componentDidMount() {
    // Gets all reviews on page load
    this.getAllReviews();
    this.getReviewAverages();
  }

  getAllReviews () {
    return axios.get(`/api/5/reviews/?sort_by=${'newest'}&rating=${''}`)
      .then(({ data }) => {
        this.setState({
          reviews: data,
        })
      })
      .catch(err => console.error(err))
    }


  getReviewAverages () {
    return axios.get('/api/5/reviewAverages')
      .then(({ data }) => {
        this.setState({
          averages: data,
        })
      })
      .catch(err => console.error(err))
  }

  loadAllReviews() {
    if (this.state.loadAll) {
      this.setState({
        loadAll: false,
      });
    } else {
      this.setState({
        loadAll: true,
      });
    }
  }

  render() {
    return (
      <StyledApp>
        <ReviewAverage averages={this.state.averages} reviews={this.state.reviews} />
        <WriteReview />
        <ReviewList loadAllReviews={this.loadAllReviews} loadAll={this.state.loadAll} reviews={this.state.reviews} />
        <PhotoGallery />
      </StyledApp>
    );
  }
}

export default App;
