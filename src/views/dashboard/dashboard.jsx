import React from 'react';
import { Container, Grid, Box } from '@mui/material';

// Components Imports
import TradingViewTicker from '../../components/specific/dashboard/ticker';
import AppBar from '../../components/specific/dashboard/appBar';
import Tile from '../../components/specific/dashboard/tileModules';
import TradingViewTimeline from '../../components/specific/dashboard/tradingViewTimeline';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuizIcon from '@mui/icons-material/Quiz';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MetricsAppBar from '../../components/specific/dashboard/metricsBar';

const Home = () => {
  const tileData = [
    {
      title: 'Learning Pathways',
      description: 'Personalized learning paths to guide your trading education.',
      actionText: 'Explore',
      icon: SchoolIcon,
      onActionClick: () => {
        // Handle click event for Learning Pathways
      },
    },
    {
      title: 'Daily Challenges',
      description: 'Participate in daily trading challenges to test your skills.',
      actionText: 'Join Now',
      icon: EmojiEventsIcon,
      onActionClick: () => {
        // Handle click event for Daily Challenges
      },
    },
    {
      title: 'Quizzes and Assessments',
      description: 'Test your knowledge with quizzes and assessments.',
      actionText: 'Start Quiz',
      icon: QuizIcon,
      onActionClick: () => {
        // Handle click event for Quizzes and Assessments
      },
    },
    {
      title: 'Market Sentiment Analysis',
      description: 'Stay updated with real-time market sentiment analysis.',
      icon: ShowChartIcon,
      actionText: 'View Analysis',
      onActionClick: () => {
        // Handle click event for Market Sentiment Analysis
      },
    },
  ];

  return (
    <>
      <AppBar />
      <TradingViewTicker />
      <MetricsAppBar />
      <Box
        sx={{
          display: 'flex',
          marginTop: '20px',
          minHeight: '100vh',
          alignItems: 'flex-start',
        }}
      >
        <TradingViewTimeline />
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            marginLeft: '450px',
            marginTop: '-720px',
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            {tileData.map((tile, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Tile {...tile} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
