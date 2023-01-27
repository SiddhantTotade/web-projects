import React from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }
        if (actualData.email && actualData.password) {
            console.log(data)
            document.getElementById('login-form').reset()
            setError({ status: true, msg: "Login Success", type: "success" })
            navigate('/')
        }
        else {
            setError({ status: true, msg: "All fields are required", type: "error" })
        }
    }
    return (
        <Box component='form' noValidate sx={{ mt: 1 }} id="login-form" onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth type='email' id='email' name='email' label='Email' />
            <TextField margin='normal' required fullWidth type='password' id='password' name='password' label='Password' />
            <Box textAlign='center'>
                <Button type='submit' sx={{ mt: 3, mb: 2, px: 5 }} variant='contained' >Login</Button>
            </Box>
            <NavLink to="/" variant="secondary">Forgot Password ?</NavLink>
            {
                error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
            }
        </Box>
    )
}

export default Login