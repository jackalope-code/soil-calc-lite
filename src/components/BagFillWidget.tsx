import React from 'react';
// Use a two part system: bag picker selection from four (five?) options, then the actual bag choice.
// This should support:
//    ounces
//    quarts
//    cf
//    liters??
//    Bag combo box from what we have in stock. Needs graphics.
// This component is biiiig for usability.
const BagFillWidget = () => {
  return (
    <div>
      <h2>Bag size (ft<sup>3</sup>)</h2>
      <input type="number" id="bag-size"></input>
      <h2>Soil name/type (optional)</h2>
      <span>placeholder</span>
      <h2>Number of bags needed</h2>
      <div id="calculated-bags"></div>
    </div>
  )
}

export default BagFillWidget;