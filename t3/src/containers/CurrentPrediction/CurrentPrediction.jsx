import React, { useState, useEffect } from 'react';
import './CurrentPrediction.css';
import Chart from '../../components/Chart/Chart';

const CurrentPrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState('TSLA');

  useEffect(() => {
    fetch(`/prediction?symbol=${selectedSymbol}`)
      .then(response => response.json())
      .then(data => {
        setPrediction(data.prediction);
      })
      .catch(error => console.log(error));
  }, [selectedSymbol]);

  const handleSymbolChange = (symbol) => {
    setSelectedSymbol(symbol);
  };
  
  return (
    <div className='ezm__current-prediction'>
      {prediction ? (
        <p>The current prediction is: {prediction}</p>
      ) : (
        <p>Loading prediction...</p>
      )}
    </div>
  );
};

export default CurrentPrediction;