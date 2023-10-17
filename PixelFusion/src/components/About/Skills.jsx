import React from 'react';
import {Typography} from '@material-tailwind/react';
import Mskills from './Modal/Mskills';
import Tskills from './Modal/Tskills';
import Dskills from './Modal/Dskills';

const Skills = () => {
  return (
    <div>
<section className=" bg-white dark:bg-gray-900 my-10">
  <div className=" text-center ">
      <div className="  mb-8 lg:mb-16  flex-col justify-center">
            <Typography variant='h6'>SKILLS</Typography>
          <Typography variant='h2' >What I Do</Typography>
          <Typography color='gray' className=' text-center mx-5'>I'm not just a developer, I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling.<br/> Discover below how I can help you.</Typography>
      </div>
      
      <div className=" space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 md:mx-20">
        
        <div className='flex flex-col items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mb-2 text-blue-300 ">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
          </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Frontend Web Development</h3>
            <Typography className="text-gray-500 dark:text-gray-400 mx-5">I specialize in creating appealing websites using cutting-edge technologies and industry-standard techniques to engage visitors.</Typography>
            <Mskills/>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-300 mb-2">
              <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
              <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Technology Stack</h3>
            <Typography className="text-gray-500 dark:text-gray-400 mx-5">I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.</Typography>
            <Tskills/>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-300 mb-2">
              <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">3D CAD Design</h3>
            <Typography className="text-gray-500 dark:text-gray-400 mx-5">I'm well-versed in the industry's most popular Cad technologies, including AutoCad, Archicad, Onshape. And folowing actu on other technologies.</Typography>
            <Dskills/>
        </div>


      </div>
  </div>
</section>
    </div>
  )
}

export default Skills;