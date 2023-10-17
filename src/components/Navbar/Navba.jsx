import React, { useState, useEffect } from "react";
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

  const NavList = () => (
    <ul className="my-2 flex flex-col  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
  );
  
  const Navba = () => {
    const [openNav, setOpenNav] = useState(false);
  
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  return (
    <div>
       <Navbar className="fixed z-50  md:top-2 left-1/2 transform -translate-x-1/2 max-w-screen-xl px-6 py-1.5 md:py-3 rounded-none md:rounded-2xl   bg-white bg-opacity-70 backdrop-blur-md">
      <div className="flex items-center justify-between text-blue-gray-900">
      <div className="flex items-center gap-4">
    <Menu>  
      <MenuHandler>
        <button>        
          <Avatar src="https://st.depositphotos.com/1008402/58359/i/450/depositphotos_583598628-stock-illustration-illustration-bearded-black-man-cartoon.jpg"
         alt="avatar" 
         variant="circular"
         className="border shadow-xl scale-75 md:scale-100 shadow-blue-900/20 ring-4 ring-blue-500/30"/>
          </button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <Typography variant="h6">Bopda Joel</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer</Typography>
        </MenuItem>
        <hr className="my-3" />
        <MenuItem>        <Typography variant="small"  className="font-normal text-gray-900">
            Follow
          </Typography>
        </MenuItem>

        <MenuItem>Menu Item 4</MenuItem>
      </MenuList>
    </Menu>
      </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    </div>
  )
}

export default Navba;