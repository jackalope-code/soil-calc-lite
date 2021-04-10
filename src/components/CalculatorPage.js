import React from 'react';
import Calculator from './Calculator';

const CalculatorPage = () => {
  return (
    <div>
      <header>
        <a href="http://www.phelangardens.com"><img id="header-logo" src="logo.png" width="120px" height="120px"></img></a>
        <h1>Soil Calculator</h1>
      </header>
      <p>
        Calculate the amount of bags needed to fill a rectangular region. <b>Bag volume must be specified in cubic feet (ft<sup>3</sup>)</b>. Rectangular dimensions may be specified with feet and inches.
      </p>
      <h2>Fill volume</h2>
      <Calculator>
        <div>this would be a field</div>
      </Calculator>
    </div>
  )
}

export default CalculatorPage;