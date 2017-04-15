import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Button
      className="submit-button"
      onClick={jest.fn()}
      text='Submit comment'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
