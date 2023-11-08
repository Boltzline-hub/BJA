import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Navba = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setIsOpen(false);
    } else if (window.innerWidth <= 960) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleNavItemClick = () => {
    setIsOpen(false); // Close the navigation list when a button is clicked
  };

  const NavList = () => (
    <div className="my-2 flex flex-col gap-2 text-black w-full lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button className='text-center w-full' onClick={handleNavItemClick}>
          <div className="flex flex-col  justify-center ">
            <div className="flex justify-center md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div> 
            <Typography className="md:hover:scale-105 md:hover:text-blue-300">Home</Typography>
          </div>
        </button>
      </Link>

      <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className=' w-full' onClick={handleNavItemClick}>
                    <div className="flex flex-col  justify-center">
                      <div className="flex justify-center md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>                        
                      </div>
                    <Typography className="md:hover:scale-105 md:hover:text-blue-300">About</Typography>                                          
                    </div> 
                  </button>
                </Link>

                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className=' w-full' onClick={handleNavItemClick}>
                    <div className="flex flex-col  justify-center">
                    <div className="flex justify-center md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>                       
                    </div>
                    <Typography className="md:hover:scale-105 md:hover:text-blue-300">Portfolio</Typography>                     
                    </div>
                  </button>
                </Link>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className=' w-full' onClick={handleNavItemClick}> 
                    <div className="flex flex-col justify-center">
                      <div className="flex justify-center md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>                        
                      </div>
                    <Typography className="md:hover:scale-105 md:hover:text-blue-300">Contact</Typography>                                          
                    </div>
                  </button>
                </Link>

      {/* Add similar onClick handlers to other buttons in the NavList */}
    </div>
  );

  return (
    <div>
      <Navbar className="fixed z-50 md:top-2 left-1/2 transform -translate-x-1/2 max-w-screen-xl px-6 py-1.5 md:py-3 rounded-none md:rounded-2xl bg-white bg-opacity-70 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu>
              <MenuHandler>
                <button>
                  <Avatar
                    src="https://st.depositphotos.com/1008402/58359/i/450/depositphotos_583598628-stock-illustration-illustration-bearded-black-man-cartoon.jpg"
                    alt="avatar"
                    variant="circular"
                    className="border shadow-xl scale-75 md:scale-100 shadow-blue-900/20 ring-4 ring-blue-500/30"
                  />
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem>
                  <Typography variant="h6">Bopda Joel</Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    Web Developer
                  </Typography>
                </MenuItem>
                <hr className="my-3" />
                <MenuItem>
                  <div className="flex justify-between">
                    {/* Your social media links here */}
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active-bg-transparent lg:hidden"
            ripple={true}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </IconButton>
        </div>
        <Collapse open={isOpen}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navba;

