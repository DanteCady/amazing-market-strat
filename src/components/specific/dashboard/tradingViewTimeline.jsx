import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

const TradingViewTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "regular",
      "width": 300, // Adjust width to match the sidebar
      "height": 850,
      "colorTheme": "dark",
      "locale": "en"
    });

    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <Box className="tradingview-widget-container" sx={{ mt: 2 }}>
      <Box className="tradingview-widget-container__widget"></Box>
    </Box>
  );
};

export default TradingViewTimeline;
