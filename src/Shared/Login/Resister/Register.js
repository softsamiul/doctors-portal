import { Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login.png';
import useFirebase from '../../../hooks/useFirebase';
import Navigation from '../../Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {createNewUser, isLoading} = useFirebase();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);

        
    }
    const handleFormSubmit = (e) => {
        if(loginData.password !== loginData.password2){
            alert("password didn't match!");
            return;
        }
        e.preventDefault()
        createNewUser(loginData.email, loginData.password);
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
                        { !isLoading && <form onSubmit={handleFormSubmit}>
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
                            <TextField 
                                sx={{width:"75%", mb:2}}
                                id="standard-basic"
                                label="Retype password"
                                type="password"
                                name="password2"
                                variant="standard"
                                onChange={handleOnChange}
                            />
                            <br />
                            <Button type="submit" variant="contained">Register</Button>
                            <br />
                            <Link to="login">
                                <Button variant="text">Already registered? Login here</Button>
                            </Link>
                        </form>}


                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={loginImg} alt="" style={{width:'100%'}} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;