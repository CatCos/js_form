import React from 'react';
import PropTypes from 'prop-types';

/**
 * Handle on change event
 *
 * @param e Event
 * @param inputName Name of the input that triggered the onChange
 * @param props Component properties
 */
function handleChange(e, inputName, props) {
  if (props.onChange) {
    return props.onChange({
      e: e,
      inputName: inputName
    });
  }
}

/**
 * Render Textarea component
 *
 * @param props Component properties
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

Textarea.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  field: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  name: '',
  value: '',
  field: '',
  text: '',
  className: 'input',
  type: 'text'
};

export default Textarea;
