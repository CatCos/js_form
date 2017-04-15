import React, { PropTypes } from 'react';

import Header from './Header.jsx';
import Form from './Form.jsx';

require('../assets/main.css');

/**
 * Render App component
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
