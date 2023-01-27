import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color='secondary'>
                    <Toolbar>
                        <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                            Login and Registration
                        </Typography>
                        <Button component={NavLink} to="/" >Home</Button>
                        <Button component={NavLink} to="/contact">Contact</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar