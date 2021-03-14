let length = 0;
let width = 0;
let height = 0;
let bagSize = 0;
const volumeDisplay = document.getElementById('calculated-volume');
const numBagsDisplay = document.getElementById('calculated-bags');

const fieldMap = new Map();
const fields = [
  'fill-length-feet', 'fill-length-inches',
  'fill-width-feet', 'fill-width-inches',
  'fill-height-feet', 'fill-height-inches',
  'bag-size'
];

fields.map((fieldName) => {
  // TODO: this is just kind of a hack for an array of default values
  let defaultValue = undefined;
  if(fieldName.includes('inches')) {
    defaultValue = 0;  
  }

  fieldMap.set(fieldName, defaultValue);
  // TODO: This could go into a component.
  document.getElementById(fieldName).value = defaultValue;
});

const handleInputChange = (event) => {
  const element = event.target;

  // Update field values for any accepted input id
  if(fieldMap.has(element.id)) {   
    fieldMap.set(element.id, Number(element.value))
  }

  let length = fieldMap.get('fill-length-feet') + fieldMap.get('fill-length-inches')/12;
  let width = fieldMap.get('fill-width-feet') + fieldMap.get('fill-width-inches')/12;
  let depth = fieldMap.get('fill-height-feet') + fieldMap.get('fill-height-inches')/12;

  // Update with volume of a rectangle
  calculateAndUpdateBagCount(length*width*depth)
}

// Update calculated volume and display
function calculateAndUpdateBagCount(volume) {

  let bagSize = fieldMap.get('bag-size');

  // Show updated volume on the screen
  let volumeDisplayText = volume.toFixed(2) > 0 ? `${volume.toFixed(2)} ft<sup>3</sup>` : 'Not specified';
  volumeDisplay.innerHTML = volumeDisplayText;

  // Update the calculated value when any of the fields change
  let numBags = volume / bagSize;
  let outputText;
  if (bagSize === 0) {
    outputText = "Please specify a bag volume.";
  } else {
    outputText = numBags || 'Unknown';
  }
  // Show updated number of bags on the screen
  numBagsDisplay.innerHTML = outputText.toFixed(2);
}