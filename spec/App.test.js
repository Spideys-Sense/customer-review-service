import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/components/App.jsx';
import ReviewAverage from '../client/src/components/ReviewAverage.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';
import WriteReview from '../client/src/components/WriteReview.jsx';
import PhotoGallery from '../client/src/components/PhotoGallery.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({adapter: new Adapter()});

test('should contain 4 components', () => {
  const wrapper = Enzyme.shallow(<App/>);
  expect(wrapper.contains(<ReviewAverage/>)).to.be.true;
  expect(wrapper.contains(<ReviewList/>)).to.be.true;
  expect(wrapper.contains(<WriteReview/>)).to.be.true;
  expect(wrapper.contains(<PhotoGallery/>)).to.be.true;
})