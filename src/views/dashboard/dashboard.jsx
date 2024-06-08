import React from 'react';
import Grid from '@mui/material/Grid';

// Components Imports
import TradingViewTicker from "../../components/specific/dashboard/ticker";
import TradingViewTimeline from "../../components/specific/dashboard/tradingViewTimeline";
import AppBar from "../../components/specific/dashboard/appBar";

const Home = () => {
    return (
        <>
        <AppBar />        
        <Grid container spacing={2} sx={{ height: '100vh', width: '100vw'}}>
            <Grid item xs={12}> {/* Ticker */}
                <TradingViewTicker />
            </Grid>
            <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 2 } }}> {/* Main Content */}
            
            </Grid>
            <Grid item xs={12} md={4} sx={{ order: { xs: 3, md: 3 } }}> {/* Timeline */}
                <TradingViewTimeline />
            </Grid>
        </Grid>
        </>
    );
}

export default Home;
