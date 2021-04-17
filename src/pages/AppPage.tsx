import React from 'react';
import Header from '../components/Header';
import NavigationWarning from '../components/NavigationWarning';
import BagFillWidget from '../components/BagFillWidget';
import CombinedVolumeTracker from '../components/CombinedVolumeTracker';
import Calculator2 from '../components/Calculator2';
{/* 
        <!DOCTYPE html>
  <html lang="en">
  <head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Soil and Mulch Volume Calculator</title>
<link rel="stylesheet" href="main.css">
</head> */}

{/* <script src="main.js"></script> */}

const AppPage = () => {

  return (
  <div>
    <Header></Header>
    <h2>Fill volume</h2>
    <div id="calculator">
      <div id="volume-input">

        <Calculator2></Calculator2>
        
        <div>
          <label htmlFor="calculated-volume" id="calculated-volume-label">Total volume</label>
          <div id="calculated-volume"></div>
        </div>


      </div>
    </div>
        <BagFillWidget></BagFillWidget>
        <CombinedVolumeTracker></CombinedVolumeTracker>
    <NavigationWarning></NavigationWarning>
  </div>
  )
}

export default AppPage;