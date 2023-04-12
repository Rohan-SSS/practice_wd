import React, { useState, useEffect } from 'react';
import './CurrentPrediction.css';
import '../../components/Chart/Chart'

const CurrentPrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');

  useEffect(() => {
    fetch(`/prediction?symbol=${selectedSymbol}`)
      .then(response => response.json())
      .then(data => {
        setPrediction(data.prediction);
      })
      .catch(error => console.log(error));
  }, [selectedSymbol]);

  const handleSymbolChange = (event) => {
    setSelectedSymbol(event.target.value);
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