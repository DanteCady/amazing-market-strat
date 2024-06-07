import React, { useEffect } from 'react';

const TradingViewTicker = () => {
  useEffect(() => {
    // Create the script tag
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {"proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index"},
        {"proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD"},
        {"proName": "FX_IDC:EURUSD", "title": "EUR to USD"},
        {"proName": "BITSTAMP:BTCUSD", "title": "Bitcoin"},
        {"proName": "BITSTAMP:ETHUSD", "title": "Ethereum"}
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en"
    });

    // Append the script to the container
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.querySelector('.tradingview-widget-container__widget').removeChild(script);
    };
  }, []);

  return (
    <div className="tradingtxtview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default TradingViewTicker;
