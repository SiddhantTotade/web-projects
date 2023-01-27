import React from 'react'
import { Grid, TextField, Button, Box, Alert, Typography } from '@mui/material'
import { useState } from 'react'

const SendPasswordResetEmail = () => {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            email: data.get('email'),
        }
        if (actualData.email) {
            console.log(data)
            document.getElementById('password-reset-form').reset()
            setError({ status: true, msg: "Password reset link is sent to your email.", type: "success" })
        }
        else {
            setError({ status: true, msg: "Please enter a valid email.", type: "error" })
        }
    }
    return (
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={1}>
                <Typography>Password Reset Email</Typography>
                <Box component='form' noValidate sx={{ mt: 1 }} id="password-reset-form" onSubmit={handleSubmit}>
                    <TextField margin='normal' required fullWidth type='email' id='email' name='email' label='Email' />
                    <Box textAlign='center'>
                        <Button type='submit' sx={{ mt: 3, mb: 2, px: 5 }} variant='contained' >Send</Button>
                    </Box>
                    {
                        error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default SendPasswordResetEmail