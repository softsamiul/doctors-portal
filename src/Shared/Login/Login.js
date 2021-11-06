import { Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import Navigation from '../Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);

        
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert("Logged in!")
    }
    return (
        <>
            <Navigation />
            <Container>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h5">
                            Login
                        </Typography>
                        <form onSubmit={handleFormSubmit}>
                            <TextField 
                                sx={{width:"75%", mb:2}}
                                id="standard-basic"
                                label="Enter Email"
                                type="email"
                                name="email"
                                variant="standard"
                                onChange={handleOnChange}
                            />
                            <br />
                            <TextField 
                                sx={{width:"75%", mb:2}}
                                id="standard-basic"
                                label="Enter password"
                                type="password"
                                name="password"
                                variant="standard"
                                onChange={handleOnChange}
                            />
                            <br />
                            <Button type="submit" variant="contained">Login</Button>
                            <br />
                            <Link to="register">
                                <Button variant="text">New user? Register here</Button>
                            </Link>
                        </form>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={loginImg} alt="" style={{width:'100%'}} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;