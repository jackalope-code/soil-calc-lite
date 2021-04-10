
const Calculator = (props) => {

  return (
    <form>
      <div>Placeholder</div>
      {props.children}
    </form>
  )
}

export default Calculator;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Soil and Mulch Volume Calculator</title>
//   <link rel="stylesheet" href="main.css">
// </head>
// <body>

//   <div id="calculator">
//     <div id="volume-input">
//       <h3>Length</h3>
//       <div class="calculator-field">
//         <label htmlFor="fill-length-feet">Feet</label>
//         <input type="number" id="fill-length-feet" oninput="handleInputChange(event)">
//         <label htmlFor="fill-length-inches">Inches</label>
//         <input type="number" id="fill-length-inches" value="0" oninput="handleInputChange(event)">
//       </div>
//       <h3>Width</h3>
//       <div class="calculator-field">
//         <label htmlFor="fill-width-feet">Feet</label>
//         <input type="number" id="fill-width-feet" oninput="handleInputChange(event)">
//         <label htmlFor="fill-width-inches">Inches</label>
//         <input type="number" id="fill-width-inches" value="0" oninput="handleInputChange(event)">
//       </div>
//       <h3>Depth</h3>
//       <div class="calculator-field">
//         <label htmlFor="fill-height-feet">Feet</label>
//         <input type="number" id="fill-height-feet" oninput="handleInputChange(event)">
//         <label htmlFor="fill-height-inches">Inches</label>
//         <input type="number" id="fill-height-inches" value="0" oninput="handleInputChange(event)">
//       </div>
//       <div>
//         <label htmlFor="calculated-volume" id="calculated-volume-label">Total volume</label>
//         <div id="calculated-volume"></div>
//       </div>
//     </div>
//     <h2>Bag size (ft<sup>3</sup>)</h2>
//     <input type="number" id="bag-size" oninput="handleInputChange(event)">
//     <h2>Number of bags needed</h2>
//     <div id="calculated-bags"></div>
//   </div>
//   <script src="main.js"></script>

//   <!-- Navigation warning -->
//   <script type="text/javascript">
//     window.onbeforeunload = () => {
//       return true;
//     }
//   </script>
// </body>
// </html>


// <!-- Selection based design for many units -->
// <!-- Consider automatic conversion upon switching or even loss of focus in JS land -->
// <!-- Could be component-ified in some way -->
// <!-- <div class="calculator-field">
//   <label htmlFor="fill-length">Length</label>
//   <input type="number" id="fill-length" oninput="handleInputChange(event)">
//   <select onchange="handleInputChange(event)">
//     <option value="ft">Feet</option>
//     <option value="in">Inches</option>
//   </select>
// </div> --></div>