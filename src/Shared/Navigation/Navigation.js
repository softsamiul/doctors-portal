import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Doctor's Portal
                </Typography>
                <Link to='/home'>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link to='/appoinment'>
                    <Button color="inherit">Appoinment</Button>
                </Link>
                <Link to="/login">
                    <Button color="inherit">Login</Button>
                </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;