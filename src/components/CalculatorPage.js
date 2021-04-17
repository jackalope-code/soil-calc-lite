import React from 'react';
import Calculator from './Calculator';
import Header from '../components/Header';

const CalculatorPage = () => {
  return (
    <div>
      <Header></Header>
      <h2>Fill volume</h2>
      <Calculator>
        <div>this would be a field</div>
      </Calculator>
    </div>
  )
}

export default CalculatorPage;