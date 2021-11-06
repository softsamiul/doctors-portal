import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <Container >
            <Grid style={{margin:'80px 0'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} sx={{textAlign:"left"}}>
                    <Box>
                        <Typography variant="h3">
                            Your Smile
                            Start Here
                        </Typography>
                        <Typography variant="p" style={{color:"gray", marginBottom: '20px'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo deserunt fuga alias voluptatibus consequuntur, nostrum veniam. Provident, debitis praesentium.
                        </Typography> 
                        <br />
                        <Button variant="contained" sx={{mt: 5}} style={{backgroundColor: '#09A9F9'}} >Get Appoinment</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:"400px"}} src={banner} alt="" />
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Banner;