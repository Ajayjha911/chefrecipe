
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="sticky" color="primary" style={{ marginBottom: '20px' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                    Chef's Recipe Guide
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
