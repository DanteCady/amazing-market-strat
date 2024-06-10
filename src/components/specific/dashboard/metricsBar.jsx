// components/specific/dashboard/MetricsAppBar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuizIcon from '@mui/icons-material/Quiz';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const metrics = [
  {
    title: 'Completed Courses',
    value: 10, // Example value
    icon: SchoolIcon,
  },
  {
    title: 'Completed Quizzes',
    value: 15, // Example value
    icon: QuizIcon,
  },
  {
    title: 'Daily Challenges',
    value: 5, // Example value
    icon: EmojiEventsIcon,
  },
  {
    title: 'Trades Executed',
    value: 25, // Example value
    icon: MonetizationOnIcon,
  },
  {
    title: 'Hours Spent Learning',
    value: 120, // Example value
    icon: AccessTimeIcon,
  },
];

const MetricsAppBar = () => {
  return (
    <AppBar position="absolute" sx={{ backgroundColor: '#131722',
        width: '84%',
        marginTop: '110px',
       }}>
      <Toolbar variant="dense">
        {metrics.map((metric, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
              width: '100%',
            }}
          >
            <IconButton edge="start" color="inherit">
              <metric.icon />
            </IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" color="inherit" component="div">
                {metric.value}
              </Typography>
              <Typography variant="body2" color="inherit" component="div">
                {metric.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default MetricsAppBar;
