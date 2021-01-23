import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import PhotoGalleryModal from './PhotoGalleryModal.jsx';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: min-content auto;
    padding: 50px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1100px;
    font-family: Roboto, serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      averages: [],
      loadAll: false,
      showPhotos: false,
    };

    this.loadAllReviews = this.loadAllReviews.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getReviewAverages = this.getReviewAverages.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    // Gets all reviews on page load
    this.getAllReviews();
    this.getReviewAverages();
  }

  getAllReviews() {
    return axios.get(`/api/5/reviews/?sort_by=${'newest'}&rating=${''}`)
      .then(({ data }) => {
        this.setState({
          reviews: data,
        });
      })
      .catch((err) => console.error(err));
  }

  getReviewAverages() {
    return axios.get('/api/5/reviewAverages')
      .then(({ data }) => {
        this.setState({
          averages: data,
        });
      })
      .catch((err) => console.error(err));
  }

  loadAllReviews() {
    if (!this.state.loadAll) {
      this.setState({
        loadAll: true,
      });
    }
  }

  showModal() {
    this.setState({
      showPhotos: true,
    })
  }

  hideModal() {
    this.setState({
      showPhotos: false,
    })
  }

  render() {
    return (
      <div>
        <StyledApp>
          <ReviewAverage
            loadAllReviews={this.loadAllReviews}
            averages={this.state.averages}
            reviews={this.state.reviews}
          />
          <WriteReview />
          <ReviewList
            loadAllReviews={this.loadAllReviews}
            loadAll={this.state.loadAll}
            reviews={this.state.reviews}
          />
          <PhotoGallery reviews={this.state.reviews} showModal={this.showModal}/>
        </StyledApp>
        <PhotoGalleryModal hideModal={this.hideModal} isVisible={this.state.showPhotos} reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
