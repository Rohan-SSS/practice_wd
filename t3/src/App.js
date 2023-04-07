import React from 'react';

import { Navbar, Chart, Search} from './components';
import { Footer, MarketData, CurrentPrediction, GeneralTrend, MACD, StocasticRSI, Strength, RPGraph} from './containers';

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Search />
      </div>
      <div>

        <Chart />
        <MarketData/>
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