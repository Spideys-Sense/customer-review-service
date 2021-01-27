import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewAverage from './ReviewAverage.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';
import WriteReviewModal from './WriteReviewModal.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import PhotoGalleryModal from './PhotoGalleryModal.jsx';
import PhotoPreview from './PhotoPreview.jsx';

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
      currReviews: [],
      photoReviews: [],
      currReview: null,
      averages: [],
      loadAll: false,
      showPhotos: false,
      showReviewForm: false,
      showReview: false,
      percentRecommended: null,
      filter: '',
      sortBy: 'newest',
    };

    this.loadAllReviews = this.loadAllReviews.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getReviewAverages = this.getReviewAverages.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
    this.showWriteReviewModal = this.showWriteReviewModal.bind(this);
    this.hideWriteReviewModal = this.hideWriteReviewModal.bind(this);
    this.calcPercentRecommended = this.calcPercentRecommended.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.getPhotoReviews = this.getPhotoReviews.bind(this);
    this.setCurrPhoto = this.setCurrPhoto.bind(this);
    this.hideReviewModal = this.hideReviewModal.bind(this);
  }

  componentDidMount() {
    // Gets all reviews on page load
    this.getAllReviews();
    this.getReviewAverages();
    this.getPhotoReviews();
  }

  getAllReviews() {
    return axios.get(`/api/5/reviews/?sort_by=${'newest'}&rating=${''}`)
      .then(({ data }) => {
        this.setState({
          reviews: data,
          currReviews: data,
        });
      })
      .catch((err) => console.error(err));
  }

  getReviewAverages() {
    return axios.get('/api/5/reviewAverages')
      .then(({ data }) => {
        this.setState({
          averages: data,
        }, this.calcPercentRecommended);
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
    });
  }

  hidePhotosModal() {
    this.setState({
      showPhotos: false,
    });
  }

  showWriteReviewModal() {
    this.setState({
      showReviewForm: true,
    });
  }

  hideWriteReviewModal() {
    this.setState({
      showReviewForm: false,
    });
  }

  calcPercentRecommended() {
    const percent = (
      parseInt(this.state.averages[3].slice(0, -1))
      + parseInt(this.state.averages[4].slice(0, -1))
      + parseInt(this.state.averages[5].slice(0, -1)));
    this.setState({
      percentRecommended: percent,
    });
  }

  filterReviews(event) {
    event.preventDefault();
    let filter = event.target.value;
    console.log(filter);
    if (filter === undefined) {
      filter = event.target.innerHTML.slice(0, 1);
    }

    this.setState({
      filter,
    }, () => {
      return axios.get(`/api/5/reviews/?sort_by=${this.state.sortBy}&rating=${this.state.filter}`)
        .then(({ data }) => {
          this.setState({
            currReviews: data,
          });
        })
        .catch((err) => console.error(err));
    })
  }

  sortReviews(event) {
    event.preventDefault();
    const sortBy = event.target.value;
    this.setState({
      sortBy,
    }, () => {
      return axios.get(`/api/5/reviews/?sort_by=${this.state.sortBy}&rating=${this.state.filter}`)
        .then(({ data }) => {
          this.setState({
            currReviews: data,
          });
        })
        .catch((err) => console.error(err));
    })
  }

  getPhotoReviews() {
    return axios.get(`/api/5/photoReviews`)
        .then(({ data }) => {
          this.setState({
            photoReviews: data,
          });
        })
        .catch((err) => console.error(err));
      }

  setCurrPhoto(event) {
    const id = event.target.id;
    return axios.get(`api/5/${id}`)
      .then(({ data }) => {
        this.setState({
          currReview: data[0],
          showPhotos: false,
          showReview: true,
      })
    })
  }

  hideReviewModal() {
    this.setState({
      showReview: false,
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
            filterReviews={this.filterReviews}
          />
          <WriteReview
            showModal={this.showWriteReviewModal}
            percentRecommended={this.state.percentRecommended}
          />
          <ReviewList
            loadAllReviews={this.loadAllReviews}
            loadAll={this.state.loadAll}
            reviews={this.state.currReviews}
            filterReviews={this.filterReviews}
            sortReviews={this.sortReviews}
            filter={this.state.filter}
            sortBy={this.state.sortBy}
          />
          <PhotoGallery
            reviews={this.state.photoReviews}
            showModal={this.showPhotosModal}
            setCurrPhoto={this.setCurrPhoto}
          />
        </StyledApp>
        <PhotoGalleryModal
          hideModal={this.hidePhotosModal}
          isVisible={this.state.showPhotos}
          reviews={this.state.reviews}
          setCurrPhoto={this.setCurrPhoto}
        />
        <WriteReviewModal
          hideModal={this.hideWriteReviewModal}
          isVisible={this.state.showReviewForm}
        />
        <PhotoPreview
          review={this.state.currReview}
          isVisible={this.state.showReview}
          hideModal={this.hideReviewModal}
        />
      </div>
    );
  }
}

export default App;
