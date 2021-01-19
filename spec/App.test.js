import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import App from '../client/src/components/App.jsx';
import ReviewAverage from '../client/src/components/ReviewAverage.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';
import WriteReview from '../client/src/components/WriteReview.jsx';
import PhotoGallery from '../client/src/components/PhotoGallery.jsx';

Enzyme.configure({adapter: new Adapter()});

describe('<App/>', () => {
  test('should contain all 4 components', () => {
    const wrapper = Enzyme.shallow(<App/>);
    const components = [<ReviewAverage/>, <ReviewList/>, <WriteReview/>, <PhotoGallery/>];
    expect(wrapper.containsAllMatchingElements(components));
  });
})