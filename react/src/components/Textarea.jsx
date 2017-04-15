import React, { PropTypes } from 'react';

/**
 * Render function
 *
 * @params props Component properties
 */
function Textarea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="label">{props.text}</label>
      <textarea className="textarea" id={props.name} type={props.type} value="" name={props.name}></textarea>
    </div>
  );
}


export default Textarea;
