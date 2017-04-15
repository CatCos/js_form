import React, { PropTypes } from 'react';
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

Input.defaultProps = {
  className: 'input',
  hasError: false
};

export default Input;
