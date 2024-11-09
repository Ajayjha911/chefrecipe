
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="caption" style={{ width: '100%', textAlign: 'center' }}>
                    © 2023 Chef's Recipe Guide
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
