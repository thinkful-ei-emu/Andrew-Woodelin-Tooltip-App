import React from 'react';
import './styles/App.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';

const firstTooltip = (
  <Tooltip message='tooltip message'>
    Lorem
  </Tooltip>
);
const secondTooltip = (
  <Tooltip message='another tooltip message'>
    Ipsum
  </Tooltip>
);


function App() {
  return (
    <div className="App">
      <Split>Left Split <br />
        <Tooltip message='one more tooltip message'>
            Necessitatibus?
        </Tooltip>
      </Split>
      <Split>Right Split</Split>
    </div>
  );
}

export default App;