import React, { PropTypes } from 'react';

/**
 * Render function
 *
 * @params props Component properties
 */
function Button(props) {
  return (
    <div className="form-group">
        <button className="submit-button" onClick={props.onSubmit}>{props.text}</button>
    </div>
  );
}

export default Button;
