import React from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const SearchHome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-6xl text-secondary font-bold mb-10">Promify</h1>
      <div className="w-full relative">
        <input className="input input-bordered w-3/4 rounded-full" type="text" placeholder="Search for the perfect dress..."/>
        <button className="absolute right-12 top-2">
          <MicrophoneIcon className="h-6 w-6 text-gray-500"/>
        </button>
        <button className="absolute right-6 top-2">
          <CameraIcon className="h-6 w-6 text-gray-500"/>
        </button>
        <button className="absolute left-2 top-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500"/>
        </button>
      </div>
      <button className="btn btn-primary w-full max-w-md mt-6">Search</button>
      <div className="absolute bottom-10 flex flex-col items-center">
        <span className="mb-2">Explore our Features</span>
        <ChevronDownIcon className="h-8 w-8 text-gray-500 animate-bounce"/>
      </div>
    </div>
  );
};

export default SearchHome;