import React from 'react';
import ReactDOM from 'react-dom';
import LIFECYCLES from './9LIFECYCLES';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LIFECYCLES />, div);
  ReactDOM.unmountComponentAtNode(div);
});
