import React from 'react';
import FormFooter from '../FormFooter';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormFooter
      onClick={jest.fn()}
      onChange={jest.fn()}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
