import React from 'react';
import Input from '../Input';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Input
      value="text"
      name='text'
      text='text input'
      onChange={jest.fn()}
      text='Submit comment'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
