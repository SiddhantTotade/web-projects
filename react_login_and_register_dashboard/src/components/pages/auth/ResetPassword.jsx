import React from 'react'
import { Grid, TextField, Button, Box, Alert } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

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
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
        }
        if (actualData.password && actualData.confirm_password) {
            if (actualData.password === actualData.confirm_password) {
                console.log(data)
                document.getElementById('password-reset-form').reset()
                setError({ status: true, msg: "Password reset successfully.", type: "success" })
                setTimeout(() => { navigate('/login-register') }, 3000)
            }
            else {
                setError({ status: true, msg: "Password and confirm password is not matching.", type: "error" })
            }
        }
        else {
            setError({ status: true, msg: "All fields are required.", type: "error" })
        }
    }

    return (
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
                <h1>Reset Password</h1>
                <Box component='form' noValidate sx={{ mt: 1 }} id="password-reset-form" onSubmit={handleSubmit}>
                    <TextField margin='normal' required fullWidth type='password' id='password' name='password' label='New Password' />
                    <TextField margin='normal' required fullWidth type='password' id='confirm_password' name='confirm_password' label='New Confirm Password' />
                    <Box textAlign='center'>
                        <Button type='submit' sx={{ mt: 3, mb: 2, px: 5 }} variant='contained' >Reset Password</Button>
                    </Box>
                    {
                        error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default ResetPassword