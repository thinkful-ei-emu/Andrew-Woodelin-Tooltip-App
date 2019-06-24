import React from 'react';
import '../styles/Tooltip.css';

function Tooltip(props) {
  return (
    <span className='tooltip'>
      <span className='tooltip-content'>
        {props.children}
      </span>
      <div className='tooltip-message'>
        {props.message}
      </div>
    </span>
  )
}

export default Tooltip;