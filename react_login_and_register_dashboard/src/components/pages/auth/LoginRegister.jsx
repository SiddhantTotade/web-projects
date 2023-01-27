import React from 'react'
import { Grid, Card, Tab, Tabs, Box } from '@mui/material'
import authPic from "../../../images/authentication.png"
import { useState } from 'react'
import Login from './Login'
import Registration from './Registration'

const TabPanel = (props) => {
    const { children, value, index } = props

    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginRegister = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container sx={{ height: "90vh" }}>
            <Grid item lg={7} sm={5} sx={{ display: { xs: 'none', sm: 'block' }, backgroundImage: `url(${authPic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'center' }}></Grid>
            <Grid item lg={5} sm={7} xs={12}>
                <Card sx={{ width: "100%", height: "100%" }}>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs onChange={handleChange} value={value} textColor='secondary' indicatorColor='secondary'>
                                <Tab label='Login' sx={{ fontWeight: 'bold', textTransform: "none" }}></Tab>
                                <Tab label='Register' sx={{ fontWeight: 'bold', textTransform: "none" }}></Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}><Login /></TabPanel>
                        <TabPanel value={value} index={1}><Registration /></TabPanel>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LoginRegister