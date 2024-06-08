import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
      "height": 850,
      "colorTheme": "dark",
      "locale": "en"
    });

    // Append the script to the container
    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup the script when component unmounts
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
