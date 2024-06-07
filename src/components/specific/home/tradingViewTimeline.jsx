import React, { useEffect } from 'react';

const TradingViewTimeline = () => {
  useEffect(() => {
    // Create the script tag
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "regular",
      "width": 400,
      "height": '100vh',
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
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default TradingViewTimeline;
