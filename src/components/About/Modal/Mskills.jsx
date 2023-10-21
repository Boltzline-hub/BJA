import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
    Typography,
  } from "@material-tailwind/react";

const Mskills = () => {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <div>
        <Button onClick={handleOpen} variant="text" className='underline' color='blue' size="sm">
           View details 
        </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <Typography variant='h3' className='text-center text-black'>Web Development Tech</Typography>
          <div>
            <Typography> Through the lens of popular web development tech,  I turn dreams into code and ideas into interactive websites. It's a world where love for design and passion for technology converge, creating a perfect synergy of aesthetics and functionality.</Typography>
            <div>
              
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Mskills