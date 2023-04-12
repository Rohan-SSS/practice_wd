// import React, { useEffect } from 'react';

// const MarketData = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       "symbol": "NASDAQ:AAPL",
//       "colorTheme": "dark",
//       "isTransparent": false,
//       "displayMode": "regular",
//       "width": 480,
//       "height": 600,
//       "locale": "in"
//     });
//     document.getElementById('tradingview-financials-widget-container').appendChild(script);
//   }, []);

//   return (
//     <div id="tradingview-financials-widget-container" className='ezm__fundamental-data'></div>
//   );
// };

// export default MarketData;