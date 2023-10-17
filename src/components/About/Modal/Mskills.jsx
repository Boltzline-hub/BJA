import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
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
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Mskills