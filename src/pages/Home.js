import React, { useState } from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header'
import Feature from '../components/Feature';
import FAQ from '../components/FAQ.js'
import Right from '../components/Right'
import Left from '../components/Left'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat', { state: { input: searchInput }});
  };

  return (
    <>
      <Header />
      <div className=" flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-[#1b3659] to-[#0f172a]">
        <h1 className="text-6xl text-primary font-bold mb-10">PROMIFY</h1>
        <form onSubmit={handleSubmit} className="w-full sm:w-3/4 lg:w-1/2 relative flex items-center">
          <input 
            className="input input-bordered flex-grow rounded-full bg-white shadow-lg px-12 py-3 focus:shadow-pink-glow caret-pink-500" 
            type="text" 
            placeholder="Search for the perfect dress..." 
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)} 
          />

          <button className="absolute left-4 ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </button>
          <button className="absolute right-16 ">
            <MicrophoneIcon className="h-6 w-6 text-gray-500 hover:text-primary" />
          </button>
          <button className="absolute right-4">
            <CameraIcon className="h-6 w-6 text-gray-500 hover:text-primary" />
          </button>
        </form>
        <div className='flex'>
          <button 
            className="btn  btn-neutral mt-6 rounded-full"
            onClick={() => navigate('/chat', { state: { input: searchInput }})}
          >
            Search
          </button>
          <button 
            className="btn btn-primary  mt-6 rounded-full mx-6"
            onClick={() => navigate('/chat', { state: { input: searchInput }})}
          >
            Design Your Own Dress
          </button>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center">
          <span className="mb-2">Explore our Features</span>
          <ChevronDownIcon className="h-12 w-12 animate-bounce" />
        </div>

      </div>
  
      {
        isUserLoggedIn ? (
          <>
            {/* Components to show when user is logged in */}
          </>
        ) : (
          <>
            <Feature />
            <Right/>
            <Left/>
            <FAQ />
          </>
        )
      }
      <Footer/>
    </>
  );
};

export default HomePage;
