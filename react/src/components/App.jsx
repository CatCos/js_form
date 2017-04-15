import React, { PropTypes } from 'react';

import Header from './Header.jsx';
import Form from './Form.jsx';
import '../assets/main.css';
/**
 * Render function
 *
 * @params props Component properties
 */
function App(props) {
  return (
    <div>
      <Header />
        <div className="form-page">
          <div className="container">
            <Form />
          </div>
        </div>
    </div>
  );
}


export default App;
