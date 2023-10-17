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
        <DialogBody className='rounded-lg shadow-lg shadow-yellow-100  bg-[url(https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148413923.jpg?t=st=1697553056~exp=1697553656~hmac=76aa431f25083d827f2a5e52b0b8b083a12611e7cbfdb59d3f5eededad34ab61)] bg-cover '>
          <div>
            <Typography variant='h4' className='text-center'>
                My Technical Skills
            </Typography>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div>
                    <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" h-5 w-5 viewBox="0 0 48 48">
                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between gap-4 w-full">
                  <Typography color="blue" variant="h6">HTML</Typography>
                  <Typography color="blue" variant="h6">50% </Typography>                    
                  </div>
                </div>
                  <Progress value={50} />
              </div>

              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div>
                    <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" h-5 w-5 viewBox="0 0 48 48">
                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between gap-4 w-full">
                  <Typography color="blue" variant="h6">HTML</Typography>
                  <Typography color="blue" variant="h6">50% </Typography>                    
                  </div>
                </div>
                  <Progress value={50} />
              </div>

              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div>
                    <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" h-5 w-5 viewBox="0 0 48 48">
                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between gap-4 w-full">
                  <Typography color="blue" variant="h6">HTML</Typography>
                  <Typography color="blue" variant="h6">50% </Typography>                    
                  </div>
                </div>
                  <Progress value={50} />
              </div>

              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div>
                    <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" h-5 w-5 viewBox="0 0 48 48">
                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between gap-4 w-full">
                  <Typography color="blue" variant="h6">HTML</Typography>
                  <Typography color="blue" variant="h6">50% </Typography>                    
                  </div>
                </div>
                  <Progress value={50} />
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Tskills