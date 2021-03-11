let length = 0;
let width = 0;
let height = 0;
let bagSize = 0;
const volumeDisplay = document.getElementById('calculated-volume');
const numBagsDisplay = document.getElementById('calculated-bags');

const onTextChange = (event) => {
  const element = event.target;

  switch(element.id) {
    case 'fill-length':
      length = element.value || 0;
      break;
    case 'fill-width':
      width = element.value || 0;
      break;
    case 'fill-height':
      height = element.value || 0;
      break;
    case 'bag-size':
      bagSize = element.value || 0;
      break;
  }

  // Update calculated volume
  let volume = length * width * height;
  volumeDisplay.innerHTML = volume > 0 ? `${volume} ft<sup>3</sup>` : 'Not specified';

  // Update the calculated value when any of the fields change
  let numBags = volume/bagSize;
  let outputText;
  if(bagSize === 0) {
    outputText = "Please specify a bag volume."
  } else {
    outputText = numBags || 'Unknown';
  }
  numBagsDisplay.innerHTML = outputText;
}