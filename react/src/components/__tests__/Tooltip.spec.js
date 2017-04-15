import React from 'react';
import Tooltip from '../Tooltip';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Tooltip
      value="Required"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
