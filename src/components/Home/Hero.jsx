import React from 'react';
import Carousell from './Carousell';
import { Input, Button, Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="bg-[url(https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=740&t=st=1697129168~exp=1697129768~hmac=3bd2cea9a05e37a66eea4dd580ac36463448a10292c983ba6969b180b91bd8cc)] bg-no-repeat bg-center bg-cover">
<div className='flex flex-col-reverse items-center md:mx-20  sm:flex-row h-screen  '>
      <div className='w-full sm:w-1/2 p-5'>
        <Typography variant='h2' className='text-center sm:text-left hidden md:block'>
          Welcome to my Web Development and 3D CAD Design Portfolio!
        </Typography>
        <Typography color='gray' className='mt-4'>
          I'm Bopda Joel, a passionate web developer and 3D CAD designer based in Cameroon. Here, you'll get a glimpse of my journey in the world of web development and 3D, where creativity meets functionality.
        </Typography>
        <div className='mt-6'>
          <Typography variant='h6' className='mb-2'>
            Your email
          </Typography>
          <div className='flex flex-col sm:flex-row gap-3'>

            <Button>Let's Connect</Button>
          </div>
          <Typography className='text-blue-gray-600 mt-3 '>
            Read my <span className='underline text-blue-300'><a href='#'>Terms and Conditions</a></span>
          </Typography>
        </div>
      </div>
      <div className='w-full sm:w-1/2'>
      <Typography variant='h4' className='text-center sm:text-left mx-5 py-2 block md:hidden'>
          Welcome to my Web Development and 3D CAD Design Portfolio!
        </Typography>
        <div className='mx-5 md:mx-0'>
        <Carousell />          
        </div>

      </div>
    </div>      
    </div>
    
  );
};

export default Hero;
