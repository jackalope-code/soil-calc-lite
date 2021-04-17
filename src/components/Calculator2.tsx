
const Calculator2 = () => {

  return (
    <div>
      <h3>Length</h3>
      <div className="calculator-field">
        <label htmlFor="fill-length-feet">Feet</label>
        <input type="number" id="fill-length-feet"></input>
        <label htmlFor="fill-length-inches">Inches</label>
        <input type="number" id="fill-length-inches" value="0"></input>
      </div>
      <h3>Width</h3>
      <div className="calculator-field">
        <label htmlFor="fill-width-feet">Feet</label>
        <input type="number" id="fill-width-feet"></input>
        <label htmlFor="fill-width-inches">Inches</label>
        <input type="number" id="fill-width-inches" value="0"></input>
      </div>
      <h3>Depth</h3>
      <div className="calculator-field">
        <label htmlFor="fill-height-feet">Feet</label>
        <input type="number" id="fill-height-feet"></input>
        <label htmlFor="fill-height-inches">Inches</label>
        <input type="number" id="fill-height-inches" value="0"></input>
      </div>
    </div>
  )
}

export default Calculator2;