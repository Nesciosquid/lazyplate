import React from 'react';

const ExampleApp = ({ number, text, numberUp, numberDown, setText }) => (
  <div>
    <h2>Aaron's LazyPlate</h2>
    <h4>Stored Number: {number}</h4>
    <button onClick={numberUp}>
      <span> + </span>
    </button>
    <button onClick={numberDown}>
      <span> - </span>
    </button>
    <br />
    <h4>Stored Text: {text}</h4>
    <input
      type="text"
      onChange={(event) => setText(event.target.value)}
      value={text}
    />
  </div>
);

ExampleApp.propTypes = {
  number: React.PropTypes.number,
  text: React.PropTypes.string,
  numberUp: React.PropTypes.func,
  numberDown: React.PropTypes.func,
  setText: React.PropTypes.func,
};

export default ExampleApp;
