import React from 'react'
import { Box, Button, TextField, Alert } from '@mui/material'
import { useState } from 'react'

const ChangePassword = () => {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

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
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4 }}>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id='password-change-form'>
                <TextField margin='normal' required fullWidth name='password' label='New Password' type='password' id='password' />
                <TextField margin='normal' required fullWidth name='confirm_password' label='Confirm New Password' type='password' id='confirm_password' />
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Update</Button>
                </Box>
                {
                    error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
                }
            </Box>
        </Box>
    )
}

export default ChangePassword