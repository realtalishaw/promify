import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( { user }) => {
  return (
    <div className="navbar p-6 fixed top-0 left-0 right-0 z-50">
    
   
      <div className="drawer drawer-end flex justify-end">
      {user ? (
        <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={user.avatarUrl} alt={user.name} />
        </div>
      </div>
    ) : (
  <a href='/login' className='btn btn-primary mx-4 rounded-full '>Login</a>
      )}
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-4">
          <label htmlFor="my-drawer-4" className="drawer-button mx-4 hover:text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li className="px-4 py-2 ">
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to="/faq">FAQs</Link>
            </li>
            <li className="px-4 py-2 ">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default Header;
