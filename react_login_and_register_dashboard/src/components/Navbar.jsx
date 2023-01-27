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
                            Authentication
                        </Typography>
                        <Button style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} component={NavLink} to="/" sx={{ color: "white", textTransform: "None" }} >Home</Button>
                        <Button style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} component={NavLink} to="/contact" sx={{ color: "white", textTransform: "None" }} >Contact</Button>
                        <Button style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} component={NavLink} to="/login-register" sx={{ color: "white", textTransform: "None" }} >Login / Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar