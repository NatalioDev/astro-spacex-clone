import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      setVisible(false); // Ocultar la barra de navegación al hacer scroll hacia abajo
    } else {
      setVisible(true); // Mostrar la barra de navegación al hacer scroll hacia arriba
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      id="navbar"
      className="transition duration-150 bg-transparent absolute m-0 p-0 block top-0 w-screen"
    >
    <div className= " lg:max-w-screen-lg my-7 mx-12">
      <div className="grid lg:flex top-12 lg:left-[50px] w-full justify-items-center h-auto">
        <a className="relative" href="/astro-spacex-clone/">
          <img src="/spacex-logo-png-transparent2.png" alt="SpaceX Logo" />
        </a>
      </div>
      <div className="flex items-center">
        <button
            onClick={() => setOpen(true) }
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
        >
          <svg 
              alt="Menu"
              className="lg:hidden absolute top-8 right-8 w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <Sidebar open={open} setOpen={setOpen}/>
        <div className="hidden lg:inline-block lg:left-[485px] lg:text-left pl-[420px] -mt-5">
          <ul className='relative m-0 p-0'>
            <li className="hover:text-blue-600 relative inline-block my-0 mx-5 cursor-pointer text-gray-50 text-sm font-bold uppercase opacity-100"><a href="/astro-spacex-clone/launches">Launches</a></li>
            <li className="hover:text-blue-600 relative inline-block my-0 mx-5 cursor-pointer text-gray-50 text-sm font-bold uppercase opacity-100"><a href="/astro-spacex-clone/updates">Updates</a></li>
            <li className="hover:text-blue-600 relative inline-block my-0 mx-5 cursor-pointer text-gray-50 text-sm font-bold uppercase opacity-100"><a href="/astro-spacex-clone/mission">Mission</a></li>
            <li className="hover:text-blue-600 relative inline-block my-0 mx-5 cursor-pointer text-gray-50 text-sm font-bold uppercase opacity-100"><a href="https://shop.spacex.com/">Shop</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}
