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
        <label htmlFor={props.name} className="label">{props.text}</label>
        <input
          className={className}
          id={props.name}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={(e) => handleChange(e, props.field, props)}/>
        {props.hasError && renderTooltip(props)}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string,
  error: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool
};

Input.defaultProps = {
  name: '',
  value: '',
  field: '',
  error: '',
  text: '',
  className: 'input',
  hasError: false,
  type: 'text'
};

export default Input;
