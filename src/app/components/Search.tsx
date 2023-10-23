'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch } from '@fortawesome/free-solid-svg-icons';
    type Props = {
        handleClick: (isbn: string) => void;
    }

const Search = ({ handleClick }:Props) => {
    const [isbn, setIsbn] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsbn(e.target.value);
    }

    const handleSearchClick = () => {
        handleClick(isbn);
    }
  return (
    <div className="bg-gray-900 text-white col-span-12 py-5">
      <div className="">
        <div>
          <div className='flex p-4'>
            <FontAwesomeIcon icon={faBook} className="h-10 text-orange-500 mr-2" />          
            <h1 className="text-4xl font-bold">Book Library</h1>
          </div>
          <div className="text-black flex flex-row">
            <input
              className="bg-white rounded-l-lg p-4 w-full font-bold"
              type='text'
              placeholder='Enter the ISBN number without hifens (-) or spaces ( ), i.e 9780739360385'
              value={isbn}
              onChange={handleChange}            
            />
            <button className="bg-orange-500 rounded-r-lg p-4 hover:bg-gray-600"
                onClick={handleSearchClick}
            >
              <FontAwesomeIcon icon={faSearch} className="h-10 text-white" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
