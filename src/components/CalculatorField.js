import React from 'react';

const CalculatorField = ({title, fieldName}) => {
    const feetFieldName = `${fieldName.toLowerCase()}-feet`
    const inchesFieldName = `${fieldName.toLowerCase()}-inches`; 
  return (
      <div>
        <h3>{title}</h3>
        <div class="calculator-field">
            <label htmlFor={feetFieldName}>Feet</label>
            <input type="number" id={feetFieldName} oninput="handleInputChange(event)"></input>
            <label htmlFor={feetFieldName}>Inches</label>
            <input type="number" id={inchesFieldName} value="0" oninput="handleInputChange(event)"></input>
        </div>
      </div>
  )
}

export default CalculatorField;

//       <h3>Length</h3>
//       <div class="calculator-field">
//         <label htmlFor="fill-length-feet">Feet</label>
//         <input type="number" id="fill-length-feet" oninput="handleInputChange(event)">
//         <label htmlFor="fill-length-inches">Inches</label>
//         <input type="number" id="fill-length-inches" value="0" oninput="handleInputChange(event)">
//       </div>