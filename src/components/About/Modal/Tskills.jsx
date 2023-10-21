import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
    Typography,
    Progress,
  } from "@material-tailwind/react";

const Tskills = () => {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <div>
        <Button onClick={handleOpen} variant="text" className='underline' color='blue' size="sm">
           View Skills 
        </Button>
      <Dialog open={open} handler={handleOpen} className='max-h-4/5'>
        <DialogBody className='bg-[url(https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=740&t=st=1697129168~exp=1697129768~hmac=3bd2cea9a05e37a66eea4dd580ac36463448a10292c983ba6969b180b91bd8cc)] bg-cover rounded-lg bg-no-repeat'>
          <div>
            <Typography variant='h3' color='black' className='text-center'>My Skills</Typography>
          
          <div className='flex flex-col justify-center gap-4'>
            <Typography color="blue-gray" variant="h4" className='mb-2'>Frontend</Typography>
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">HTML5</Typography>
              <Typography color="blue-gray" variant="h6">80%</Typography>
            </div>
            <Progress value={80} color='blue' />
          </div>

          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">Tailwindcss / CSS3</Typography>
              <Typography color="blue-gray" variant="h6">75%</Typography>
            </div>
            <Progress value={75} color='blue' />
          </div>

          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">Javascript</Typography>
              <Typography color="blue-gray" variant="h6">60%</Typography>
            </div>
            <Progress value={60} color='blue' />
          </div>
          
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">Reactjs</Typography>
              <Typography color="blue-gray" variant="h6">70%</Typography>
            </div>
            <Progress value={70} color='blue' />
          </div>
          </div>

          <div className='flex flex-col justify-center gap-4 my-5'>
            <Typography color="blue-gray" variant="h4" className='mb-2'>Backend</Typography>
            <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">Sanity</Typography>
              <Typography color="blue-gray" variant="h6">40%</Typography>
            </div>
            <Progress value={40} color='blue' />
          </div>

          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">Php</Typography>
              <Typography color="blue-gray" variant="h6">30%</Typography>
            </div>
            <Progress value={30} color='blue' />
          </div>
          </div>
            
          </div>
        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Tskills