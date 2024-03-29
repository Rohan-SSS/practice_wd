import React, { useEffect, useRef, useState } from 'react';
import './Chart.css';
import './Search.css';

var data = require("./stocks.json")

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
  const [searchInput, setSearchInput] = useState('');
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      const containerElement = document.getElementById('tradingview_dee36');
      if (containerElement && 'TradingView' in window) {
        const widget = new window.TradingView.widget({
          width: '100%',
          height: '100%',
          symbol: selectedSymbol,
          interval: '30',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'in',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_dee36',
        });

        // Resize the widget to fit the container size
        widget.onChartReady(() => {
          widget.resize(containerElement.offsetWidth, containerElement.offsetHeight);
        });
      }
    }
  }, [selectedSymbol]);

  const handleSymbolChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchInput.trim() === '') {
      setSelectedSymbol('AAPL');
    } else {
      setSelectedSymbol(searchInput);
    }
  };

  fetch('/prediction', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      selectedSymbol
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  return (
    <div>
      <div>
        <div className='ezm__search'>
          <input
            type='text'
            placeholder='Search for an asset...'
            value={searchInput}
            onChange={handleSymbolChange}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#131722';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#171b26';
            }}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <div className='ezm__search-dropdown'>
          {data.map((item) => (
            <div className='ezm__search-dropdown-row'>
              {item.company}
            </div>))}
        </div>
      </div>
      <div className='tradingview-widget-container'>
        <div id='tradingview_dee36' className='tradingview-widget-container-chart'></div>
      </div>
    </div>
  );
}
