import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize active link based on current pathname
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Handle click functions
  const handleHomeClick = () => {
    setActiveLink('/');
    navigate('/');
  };

  const handleAddClick = () => {
    setActiveLink('/add');
    navigate('/add');
  };

  const handleSigninClick = () => {
    setActiveLink('/signin');
    navigate('/signin');
  };


  return (

    <div className=' flex flex-row bg-gray-800 justify-between p-3 px-2 text-xl font-bold text-white m-0'>
      <h1 className='text-3xl cursor-pointer p-2' onClick={handleHomeClick}>TravelBook</h1>
       {/* left side  */}
      <div className='text-lg  flex-wrap flex flex-col sm:flex-row justify-start '>
        <div className={`flex flex-row justify-start pr-4 hover:text-gray-400 cursor-pointer underline-offset-[6px] transform motion-safe:hover:scale-105 ${activeLink === '/' ? 'underline' : ''}`} onClick={handleHomeClick}>
          <div className='pt-[9px] m-1 text-xl'>Home</div>
          <div className='pt-[17px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 underline">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </div>
        </div>

        <div className={`flex flex-row justify-start pr-4 hover:text-gray-400 cursor-pointer  underline-offset-[6px] transform motion-safe:hover:scale-105 ${activeLink === '/add' ? 'underline' : ''}`} onClick={handleAddClick}>
          <div className='pt-[9px] m-1 text-xl'>Add Blog</div>
          <div className='pt-[17px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className={`flex flex-row justify-start pr-4 hover:text-gray-400 cursor-pointer  underline-offset-[6px] transform motion-safe:hover:scale-105 ${activeLink === '/signin' ? 'underline' : ''}`} onClick={handleSigninClick}>
          <div className='pt-[9px] m-1 text-xl'>Signin</div>
          <div className='pt-[17px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        </div>


        {/* <div className={`flex flex-row justify-start pr-4 hover:text-gray-400 cursor-pointer  underline-offset-[6px] transform motion-safe:hover:scale-105 ${activeLink === '/contact' ? 'underline' : ''}`} onClick={handleContactClick}>
          <div className='pt-[9px] m-1 text-xl'>Contact</div>
          <div className='pt-[17px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
        </div> */}
      </div>
    </div>

  );
}

export default Navbar;
