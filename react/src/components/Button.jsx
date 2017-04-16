import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render Button Component
 *
 * @params props Component properties
 */
function Button(props) {
  return (
    <div className="form-group">
        <button className="submit-button"
          onClick={props.onSubmit}>
          {props.text}
        </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onSubmit: PropTypes.func
};

Button.defaultProps = {
  text: ''
};

export default Button;
