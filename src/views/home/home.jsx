import React from 'react';
import Grid from '@mui/material/Grid';

// Components Imports
import TradingViewTicker from "../../components/specific/home/ticker";
import TradingViewTimeline from "../../components/specific/home/tradingViewTimeline";


const Home = () => {
    return (
        <Grid container spacing={2} sx={{ height: '100vh', width: '100vw', m: 0, padding: 2 }}>
            <Grid item xs={12}> {/* Ticker */}
                <TradingViewTicker />
            </Grid>
            <Grid item xs={12} md={8}> {/* Timeline */}
                <TradingViewTimeline />
            </Grid>
   
        </Grid>
    );
}

export default Home;
