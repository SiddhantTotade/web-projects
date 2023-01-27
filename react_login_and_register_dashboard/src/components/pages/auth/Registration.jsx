import React from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'

const Registration = () => {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: "",
        tc: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            confirmPassword: data.get('confirm_password'),
            tc: data.get('tc')
        }
        if (actualData.email && actualData.name && actualData.password && actualData.confirmPassword && actualData.tc !== null) {
            if (actualData.password === actualData.confirmPassword) {
                console.log(actualData)
                document.getElementById('registration-form').reset()
                setError({ status: true, msg: "Registration Success", type: "success" })
                navigate('/home')
            }
            else {
                setError({ status: true, msg: "Password and confirm password is not matching.", type: "error" })
            }
        }
        else {
            setError({ status: true, msg: "All fields are required", type: "error" })
        }
    }

    return (
        <Box component='form' noValidate sx={{ mt: 1 }} id="registration-form" onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth type='name' id='name' name='name' label='Name' />
            <TextField margin='normal' required fullWidth type='email' id='email' name='email' label='Email' />
            <TextField margin='normal' required fullWidth type='password' id='password' name='password' label='Password' />
            <TextField margin='normal' required fullWidth type='password' id='confirm_password' name='confirm_password' label='Confirm Password' />
            <FormControlLabel label='I agree to terms and condition.' control={<Checkbox value='agree' color='primary' name='tc' id='tc' />}></FormControlLabel>
            <Box textAlign='center'>
                <Button type='submit' sx={{ mt: 3, mb: 2, px: 5 }} variant='contained' >Join</Button>
            </Box>
            <NavLink to="/" variant="secondary">Forgot Password</NavLink>
            {
                error.status ? <Alert sx={{ mt: 3 }} severity={error.type}>{error.msg}</Alert> : ""
            }
        </Box>
    )
}

export default Registration