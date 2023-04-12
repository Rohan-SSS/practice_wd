import React from 'react';

import { Navbar, Chart} from './components';
import { Footer,  CurrentPrediction, GeneralTrend, MACD, StocasticRSI, Strength, RPGraph} from './containers';

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
      </div>
      <div>
        <Chart />
        {/* <MarketData/> */} 
      </div>
      <div>
        <CurrentPrediction />
        <GeneralTrend />
        <StocasticRSI />
        <MACD />
        <Strength />
      </div>
      <RPGraph />
      <Footer />
    </div>
  )
}

export default App