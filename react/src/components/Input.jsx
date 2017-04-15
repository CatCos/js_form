import React, { PropTypes } from 'react';

/**
 * Render function
 *
 * @params props Component properties
 */
function Input(props) {
  return (
    <div className="form-group">
        <label htmlFor={props.name} className="label">{props.text}</label>
        <input className={props.className} id={props.name} type={props.type} value="" name={props.name}/>
    </div>
  );
}

Input.defaultProps = {
  className: 'input'
};

export default Input;
