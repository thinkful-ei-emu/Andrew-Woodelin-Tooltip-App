import React from 'react';
import '../styles/Split.css';

function Split(props) {
  return (
    <div className="split">
      {props.children}
    </div>
  );
}

export default Split;