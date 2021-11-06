import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Bookings from '../Bookings/Bookings';

const AvailableAppoinment = ({date}) => {

    const bookings = [
        {
            id: 1,
            name: "Dental Sergery",
            time: "8:00 AM - 9:00 AM",
            space: "9"
        },
        {
            id: 2,
            name: "Dental Sergery",
            time: "9:00 AM - 10:00 AM",
            space: "6"
        },
        {
            id: 3,
            name: "Dental Sergery",
            time: "7:00 AM - 9:00 AM",
            space: "6"
        },
        {
            id: 4,
            name: "Dental Sergery",
            time: "8:00 AM - 9:00 AM",
            space: "6"
        },
        {
            id: 5,
            name: "Dental Sergery",
            time: "8:00 AM - 9:00 AM",
            space: "9"
        },
        {
            id: 6,
            name: "Dental Sergery",
            time: "8:00 AM - 9:00 AM",
            space: "8"
        }
    ]

    return (
        <Container sx={{my:5}}>
            <Typography variant="h4" sx={{ color: 'info.main', mb:3 }}>Available Appoinments on {date.toDateString()}</Typography>

            <Grid container spacing={2}>
                {
                   bookings.map(booking=> <Bookings key={booking.id} booking={booking} date={date}></Bookings>) 
                }
            </Grid>

        </Container>
    );
};

export default AvailableAppoinment;