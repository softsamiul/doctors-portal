import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';
const Bookings = ({booking, date}) => {
    const {name, space, time, id} = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{py:5}} elevation={3}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5">{name}</Typography>
                    <Typography variant="h6">{time}</Typography>
                    <Typography variant="caption">{space} SPACES AVAILABLE</Typography>
                    <br />
                    <Button onClick={handleOpen} sx={{mt:2}} variant="contained">BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <AppoinmentModal key={id} booking={booking} open={open} handleClose={handleClose} date={date}></AppoinmentModal>
        </>
    );
};

export default Bookings;