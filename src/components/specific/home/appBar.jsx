import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Logo from '../../../assets/Crown.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

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
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
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
  return (
    <AppBar position="static" sx={{ backgroundColor: '#131722', }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ height: '50px', width: '50px', marginRight: '10px' }} />
        {/* <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', }}>
          Amazing Market Strategies
        </Typography> */}
        <Search sx={{ flexGrow: 2 }}>
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
          <LinkButton startIcon={<HelpIcon />}>Help</LinkButton>
          <LinkButton startIcon={<LogoutIcon />}>Logout</LinkButton>
        </NavLinks>
      </Toolbar>
    </AppBar>
  );
}
