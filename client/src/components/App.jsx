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
      clicked: false,
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
    this.selectNextPhoto = this.selectNextPhoto.bind(this);
    this.setToClicked = this.setToClicked.bind(this);
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

  getPhotoReviews() {
    return axios.get('/api/5/photoReviews')
      .then(({ data }) => {
        this.setState({
          photoReviews: data,
        });
      })
      .catch((err) => console.error(err));
  }

  setToClicked() {
    this.setState({
      clicked: true,
    });
  }

  setCurrPhoto(event) {
    const id = event.target.id;
    return axios.get(`api/5/${id}`)
      .then(({ data }) => {
        this.setState({
          currReview: data[0],
          showPhotos: false,
          showReview: true,
        });
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
    });
  }

  sortReviews(event) {
    const { sortBy, filter } = this.state;
    event.preventDefault();
    const sort_by = event.target.value;
    this.setState({
      sortBy: sort_by,
    }, () => (
      axios.get(`/api/5/reviews/?sort_by=${sortBy}&rating=${filter}`)
        .then(({ data }) => {
          this.setState({
            currReviews: data,
          });
        })
        .catch((err) => console.error(err))
    ));
  }

  hidePhotosModal() {
    this.setState({
      showPhotos: false,
    });
  }

  selectNextPhoto(event) {
    const { photoReviews, currReview } = this.state;
    const index = photoReviews.indexOf(currReview);

    if (event.target.innerHTML === 'Next >') {
      if (index < photoReviews.length - 1) {
        this.setState({
          currReview: photoReviews[index + 1],
          clicked: false,
        });
      } else {
        this.setState({
          currReview: photoReviews[0],
          clicked: false,
        });
      }
    } else {
      if (index > 0) {
        this.setState({
          currReview: photoReviews[index - 1],
          clicked: false,
        });
      } else {
        this.setState({
          currReview: photoReviews[photoReviews.length - 1],
          clicked: false,
        });
      }
    }
  }

  showPhotosModal() {
    this.setState({
      showPhotos: true,
    });
  }

  loadAllReviews() {
    const { loadAll } = this.state;
    if (!loadAll) {
      this.setState({
        loadAll: true,
      });
    }
  }

  hideReviewModal() {
    this.setState({
      showReview: false,
    });

  }

  render() {
    const {
      reviews,
      currReviews,
      photoReviews,
      currReview,
      averages,
      loadAll,
      showPhotos,
      showReviewForm,
      showReview,
      percentRecommended,
      filter,
      sortBy,
      clicked,
    } = this.state;
    return (
      <div>
        <StyledApp>
          <ReviewAverage
            loadAllReviews={this.loadAllReviews}
            averages={averages}
            reviews={reviews}
            filterReviews={this.filterReviews}
          />
          <WriteReview
            showModal={this.showWriteReviewModal}
            percentRecommended={percentRecommended}
          />
          <ReviewList
            loadAllReviews={this.loadAllReviews}
            loadAll={loadAll}
            reviews={currReviews}
            filterReviews={this.filterReviews}
            sortReviews={this.sortReviews}
            filter={filter}
            sortBy={sortBy}
          />
          <PhotoGallery
            reviews={photoReviews}
            showModal={this.showPhotosModal}
            setCurrPhoto={this.setCurrPhoto}
          />
        </StyledApp>
        <PhotoGalleryModal
          hideModal={this.hidePhotosModal}
          isVisible={showPhotos}
          reviews={reviews}
          setCurrPhoto={this.setCurrPhoto}
        />
        <WriteReviewModal
          hideModal={this.hideWriteReviewModal}
          isVisible={showReviewForm}
        />
        <PhotoPreview
          review={currReview}
          isVisible={showReview}
          hideModal={this.hideReviewModal}
          changeReview={this.selectNextPhoto}
          clicked={clicked}
          setToClicked={this.setToClicked}
        />
      </div>
    );
  }
}

export default App;
