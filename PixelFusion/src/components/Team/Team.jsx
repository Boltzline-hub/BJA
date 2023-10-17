import { Typography } from '@material-tailwind/react'
import React from 'react'

const Team = () => {
  return (
    <div className='bg-blue-100'>
                                            
<div class="py-20">
  <div class="container mx-auto px-6 text-center md:px-12">
    <div class="mb-16">
        <Typography variant='h5'>Team</Typography>
      <Typography variant='h2' class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        They got my cover
      </Typography>
      <p class="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
        On large project I take pride in having a crew of experienced developers.
      </p>
    </div>
    <div class="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
      <div class="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
        <div class="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
          <img
            class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src="https://st.depositphotos.com/1008402/58259/i/450/depositphotos_582598202-stock-illustration-illustration-smiling-woman-cartoon-close.jpg"
            alt="woman"
            loading="lazy"
            width="640"
            height="805"
          />
        </div>
        <div class="space-y-4 text-center">
          <div>
            <Typography class="text-2xl text-gray-700 dark:text-white">Hentoni Doe</Typography>
            <span class="block text-sm text-gray-500">CEO-Founder</span>
          </div>
        </div>
      </div>

      <div class="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
        <div class="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
          <img
            class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src="https://st.depositphotos.com/1008402/55202/i/450/depositphotos_552024310-stock-illustration-illustration-smiling-caucasian-woman-cartoon.jpg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
        </div>
        <div class="space-y-4 text-center">
          <div>
            <Typography class="text-2xl text-gray-700 dark:text-white">Anabelle Doe</Typography>
            <span class="block text-sm text-gray-500">Chief Operations Officer</span>
          </div>
        </div>
      </div>

      <div class="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
        <div class="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
          <img
            class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src="https://st.depositphotos.com/1008402/56324/i/450/depositphotos_563249552-stock-illustration-illustration-man-cartoon-close-portrait.jpg"
            alt="man"
            loading="lazy"
            width="1000"
            height="667"
          />
        </div>
        <div class="space-y-4 text-center">
          <div>
            <Typography class="text-2xl text-gray-700 dark:text-white">Jonathan Doe</Typography>
            <span class="block text-sm text-gray-500">Chief Technical Officer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Team