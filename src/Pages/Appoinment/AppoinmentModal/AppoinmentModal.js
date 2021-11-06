import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AppoinmentModal = ({booking, open,handleClose, date}) => {
    const {name, time} = booking;
    
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                {name}
                </Typography>

                <TextField
                    sx={{width:'90%', my:2}}
                    disabled
                    id="outlined-size-small"
                    defaultValue={time}
                    size="small"
                />
                <TextField
                    disabled
                    sx={{width:'90%'}}
                    id="outlined-size-small"
                    defaultValue={date.toTimeString()}
                    size="small"
                />
                <TextField
                    sx={{width:'90%', my:2}}
                    id="outlined-size-small"
                    defaultValue="Enter name"
                    size="small"
                />
                <TextField
                    sx={{width:'90%'}}
                    id="outlined-size-small"
                    defaultValue="Enter email"
                    size="small"
                />
                <TextField
                    sx={{width:'90%', my:2}}
                    id="outlined-size-small"
                    defaultValue="Phone Number"
                    size="small"
                />
                <Button sx={{mt:2}} variant="contained">BOOK APPOINMENT</Button>
            </Box>
            </Fade>
        </Modal>
    );
};

export default AppoinmentModal;