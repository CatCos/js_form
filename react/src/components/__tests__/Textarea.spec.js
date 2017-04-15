import React from 'react';
import Textarea from '../Textarea';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Textarea
      value="text"
      name='text'
      type='text'
      field='text'
      onChange={jest.fn()}
      text='Submit comment'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
