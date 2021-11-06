import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../assets/images/chair.png';
import Calender from '../../../Shared/Calender/Calender';

const AppoinmentHeader = ({date, setDate}) => {
    
    return (
        <Container>
            <Grid container>  
                <Grid item xs={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={6}>
                    <img src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;