import React, { useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ stories }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": true,
      "displayMode": "adaptive",
      "width": 300,
      "height": 550,
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
    <Box
      sx={{
        width: '300px',
        flexShrink: 0,
        padding: '20px',
      }}
    >
      <Box className="tradingview-widget-container" sx={{ mt: 2 }}>
        <Box className="tradingview-widget-container__widget"></Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
