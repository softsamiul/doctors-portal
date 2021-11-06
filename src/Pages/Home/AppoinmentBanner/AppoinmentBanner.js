import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../assets/images/appointment-bg.png';
import doctor from '../../../assets/images/doctor.png';

const appoinmentBannerBg = {
    background : `url(${bg})`,
    backgroundColor: 'rgba(132, 206, 243,.8)',
    backgroundBlendMode: 'darken',
    marginTop: '160px'


}

const AppoinmentBanner = () => {
    return (
        <Container>
            <Box style={appoinmentBannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <img src={doctor} alt="" style={{marginTop: "-130px", width:"400px"}}/>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{display: 'flex', justifyContent: 'flex-start',  alignItems: 'center', textAlign: 'left'}}>
                        <Box>
                            <Typography variant="h6" sx={{mb:2}} style={{color:'#09A9F9'}}>
                                Appoinment
                            </Typography>
                            <Typography variant="h4" style={{color:'white'}}>
                                Get Appoinment Now
                            </Typography>
                            <Typography variant="p" sx={{my:4}} color={{color: 'white'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus voluptatum earum saepe velit soluta amet placeat facilis aspernatur accusamus?
                            </Typography>
                            <br />
                            <Button variant="contained" sx={{mt: 5}} style={{backgroundColor: '#09A9F9'}} >Book Now</Button>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </Container>
    );
};

export default AppoinmentBanner;