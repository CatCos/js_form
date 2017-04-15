import React, { PropTypes } from 'react';

function handleChange(e, inputName, props) {
  if (props.onChange) {
    return props.onChange({
      e: e,
      inputName: inputName
    });
  }
}

/**
 * Render function
 *
 * @params props Component properties
 */
function Textarea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="label">{props.text}</label>
      <textarea
        className="textarea"
        id={props.name}
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={(e) => handleChange(e, props.field, props)}/>
    </div>
  );
}

export default Textarea;
