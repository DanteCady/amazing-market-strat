import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import Logo from '../../../assets/Crown.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const NavLinks = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '80px',
}));

export default function MyAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List sx={{ backgroundColor: '#131722', color: 'white'}}>
      <ListItem>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Menu
        </Typography>
          <Avatar alt="User" src='../../../assets/sampleImage.jpg' sx={{marginLeft: '15px'}}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><PeopleIcon /></ListItemIcon>
        <ListItemText primary="Community" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><WidgetsIcon /></ListItemIcon>
        <ListItemText primary="Widgets" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><HelpIcon /></ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><NotificationsIcon /></ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><LogoutIcon /></ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#131722', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={Logo} alt="Logo" style={{ height: '50px', width: '50px', marginRight: '10px' }} />
          <Search sx={{ flexGrow: 1, mx: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <NavLinks>
            <LinkButton startIcon={<DashboardIcon />}>Dashboard</LinkButton>
            <LinkButton startIcon={<PeopleIcon />}>Community</LinkButton>
            <LinkButton startIcon={<WidgetsIcon />}>Widgets</LinkButton>
            <LinkButton startIcon={<SettingsIcon />}>Settings</LinkButton>
            <LinkButton startIcon={<NotificationsIcon />}>Notifications</LinkButton>
            <LinkButton startIcon={<HelpIcon />}>Help</LinkButton>
            <LinkButton startIcon={<LogoutIcon />}>Logout</LinkButton>
          <Avatar alt="User" src='../../../assets/sampleImage.jpg' sx={{marginLeft: '15px'}}/>
          </NavLinks>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList}
      </Drawer>
    </>
  );
}
