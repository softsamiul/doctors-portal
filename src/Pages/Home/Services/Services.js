import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluroid from '../../../assets/images/fluoride.png';
import whiting from '../../../assets/images/whitening.png';
import Service from '../Service/Service';




const data = [
    {
        name: "Fluroid",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eius laboriosam illo ratione assumenda necessitatibus",
        img: fluroid
    },
    {
        name: "Cavity",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eius laboriosam illo ratione assumenda necessitatibus",
        img: cavity
    },
    {
        name: "Whitening",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eius laboriosam illo ratione assumenda necessitatibus",
        img: whiting
    }
]


const Services = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{ my: 2, fontWeight: 500, color: 'success.main' }} color="text.primary" variant="h6" gutterBottom>
                          OUR SERVICES
                </Typography>
                <Typography sx={{ mb:5, fontWeight: 600 }} color="text.primary" variant="h4" gutterBottom>
                          Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        data.map(service => <Service key={service.name} service={service}></Service>)
                    } 
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;