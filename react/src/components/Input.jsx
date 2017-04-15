import React from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';

import Tooltip from './Tooltip.jsx';

function handleChange(e, inputName, props) {
  if (props.onChange) {
    return props.onChange({
      e: e,
      inputName: inputName
    });
  }
}

function handleBlur(e, inputName, props) {
  if (props.onBlur) {
    return props.onBlur({
      e: e,
      inputName: inputName
    });
  }
}
function renderRequired() {
  return (<span className="require">*</span>);
}

function renderTooltip(props) {
  return (
    <Tooltip value={props.error}/>
  );
}

/**
 * Render function
 *
 * @params props Component properties
 */
function Input(props) {
  let className = [props.className];

  if (props.hasError) {
    className.push('input-error');

    className = classSet(className);
  }

  return (

    <div className="form-group">
        <label htmlFor={props.name} className={props.labelClassName}>{props.text}{props.required && renderRequired()}</label>
        <input
          className={className}
          id={props.name}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={(e) => handleChange(e, props.field, props)}
          onBlur={(e) => handleBlur(e, props.field, props)}/>
        {props.hasError && renderTooltip(props)}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string,
  error: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  hasError: PropTypes.bool,
  required: PropTypes.bool
};

Input.defaultProps = {
  name: '',
  value: '',
  field: '',
  error: '',
  text: '',
  className: 'input',
  labelClassName: 'label',
  hasError: false,
  required: false,
  type: 'text'
};

export default Input;
