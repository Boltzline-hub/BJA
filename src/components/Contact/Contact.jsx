import React from 'react';
import { Typography, Input, Radio, Button } from '@material-tailwind/react';

const Contact = () => { 
  return (
    <div>
      <div className='text-center'>
        <Typography variant='h2'>Contact Me</Typography>
        <Typography>
          Ready to get started? Feel free to reach out through the contact form, and
          let's embark on <br/> a journey of innovation and success.
        </Typography>
      </div>

      <div className='p-5 bg-white border shadow-gray-100 mx-2 md:mx-20 rounded-lg shadow-lg my-10'>
      <div className='flex flex-col md:flex-row md:w-auto justify-between md:gap-5'>

          <div className='bg-black md:w-2/4  px-12 py-16 rounded-lg flex-col flex  md:gap-3'>
            <div>
              <Typography variant='h5' color='white'>
                Contact Information
              </Typography>
              <Typography variant='small' className='font-extralight text-white'>
                Fill up the form, and I will get back to you within 24 hours
              </Typography>
            </div>
            <div className='my-5'>
              <Typography variant='small' color='white'>
                +237 673 110 921
              </Typography>
              <Typography variant='small' color='white'>
                Auguste542lavi@gmail.com
              </Typography>
              <Typography variant='small' color='white'>
                Open Support Ticket
              </Typography>
            </div>
            <div className='flex mt-4 gap-4'>
              <a href='#' className='text-blue-500'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a 8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a 11.616 11.616 0 006.29 1.84' />
                </svg>
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path filerule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div className='md:w-2/4 mx-5 mt-5 md:mx-14'>
          <div className='flex flex-col md:flex-row md:w-auto justify-between md:gap-5'>
              <div className='md:w-2/4'>
                <Input variant='static' label='First Name' placeholder='e.g. Lucas' />
              </div>

              <div className='md:w-2/4 mt-5 md:mt-0'>
                <Input variant='static' label='Last Name' placeholder='e.g. John' />
              </div>
            </div>

            <div className=' pt-5'>
              <Input variant='static' label='Email' placeholder='e.g. lucas@gmail.com' />
              <Typography variant='small' className='pt-5 text-center md:text-left'>
                What are you interested in?
              </Typography>
              <div className='-mx-3 flex flex-col md:flex-row md:w-auto justify-between md:gap-5'>
                <Radio name='type' label='Design' />
                <Radio name='type' label='Development' />
                <Radio name='type' label='Support' />
                <Radio name='type' label='Other' />
              </div>
              <div className='mt-5'>
                <Input variant='static' label='Your Message' />
              </div>
              <div className='my-5 flex justify-center md:justify-end'>
                <Button>Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;