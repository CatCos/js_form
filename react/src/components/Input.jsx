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
function Input(props) {
  return (
    <div className="form-group">
        <label htmlFor={props.name} className="label">{props.text}</label>
        <input
          className={props.className}
          id={props.name}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={(e) => handleChange(e, props.field, props)}/>
    </div>
  );
}

Input.defaultProps = {
  className: 'input'
};

export default Input;
