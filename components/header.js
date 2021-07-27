import React, { Component } from 'react';
import { useState } from 'react';
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return ( 
    <header className="site-container">
      <nav className="sm:hidden flex flex-row text-xl text-gray-700 font-normal">
        <div onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={active ? 'hidden' : 'rounded hover:bg-pink-100 hover:text-pink-700 px-2'}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </nav>
      <nav className={active ? 'flex sm:flex flex-col overflow-y-auto sm:overflow-y-hidden sm:flex-row sm:space-y-0 justify-between text-xl text-gray-700 font-normal transition duration-700 ease-linear' : 'hidden sm:flex flex-col overflow-y-auto sm:overflow-y-hidden sm:flex-row sm:space-y-0 justify-between text-xl text-gray-700 font-normal'}>
        <div className="rounded hover:bg-gray-100 hover:text-gray-700">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="rounded hover:bg-blue-100 hover:text-blue-700">
          <Link href="/journey">
            <a>Journey</a>
          </Link>
        </div>
        <div className="rounded hover:bg-purple-100 hover:text-purple-700">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="rounded hover:bg-pink-100 hover:text-pink-700">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className="rounded hover:bg-green-100 hover:text-green-700">
          <Link href="/watercolor">
            <a>Water Color</a>
          </Link>
        </div>
      </nav>
  </header>
   );
}

export default Header
