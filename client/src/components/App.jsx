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
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
    this.showWriteReviewModal = this.showWriteReviewModal.bind(this);
    this.hideWriteReviewModal = this.hideWriteReviewModal.bind(this);
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

  showPhotosModal() {
    this.setState({
      showPhotos: true,
    })
  }

  hidePhotosModal() {
    this.setState({
      showPhotos: false,
    })
  }

  showWriteReviewModal() {

  }

  hideWriteReviewModal() {

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
          <WriteReview
            hideModal={this.hideWriteReviewModal}
            showModal={this.showWriteReviewModal}
          />
          <ReviewList
            loadAllReviews={this.loadAllReviews}
            loadAll={this.state.loadAll}
            reviews={this.state.reviews}
          />
          <PhotoGallery reviews={this.state.reviews} showModal={this.showPhotosModal}/>
        </StyledApp>
        <PhotoGalleryModal
          hideModal={this.hidePhotosModal}
          isVisible={this.state.showPhotos}
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

export default App;
