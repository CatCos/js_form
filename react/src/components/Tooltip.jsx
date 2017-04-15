import React, { PropTypes } from 'react';

/**
 * Render function
 *
 * @params props Component properties
 */
function Tooltip(props) {
  
  return (
    <div className="Tooltip Tooltip-error" id="tooltip">
      <div className="Tooltip__arrow"></div>
      <div className="Tooltip__balloon">
        <span className="Tooltip__label" id="tooltip-span">{props.value}</span>
      </div>
    </div>
  );
}

export default Tooltip;
