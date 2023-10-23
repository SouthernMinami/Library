'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [isbn, setIsbn] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsbn(e.target.value);
    }
  return (
    <div className="bg-gray-900 text-white col-span-12 py-5">
      <div className="">
        <div>
          <div className='flex p-4'>
            <FontAwesomeIcon icon={faBook} className="h-10 text-orange-500 mr-2" />          
            <h1 className="text-4xl font-bold">Book Library</h1>
          </div>
          <div className="flex flex-row">
            <input
              className="bg-white rounded-l-lg p-4 w-full font-bold"
              type='text'
              placeholder='Enter ISBN'
              value={isbn}
              onChange={handleChange}            
            />
            <button className="bg-orange-500 rounded-r-lg p-4 hover:bg-gray-600">
              <FontAwesomeIcon icon={faSearch} className="h-10 text-white" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
