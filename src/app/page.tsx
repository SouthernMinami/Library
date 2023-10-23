'use client'

import React, { useState, useEffect } from 'react';
import BookInfo from './components/BookInfo';
import Search from './components/Search';
import FetchAPI from './api/FetchAPI';
import baseUrl from './api/baseUrl';

export default function Home() {
  const [data, setData] = useState<string[] | null>(null);

    const handleClick = (isbn: string) => {
      const url = `${baseUrl}${isbn}`;
      console.log(url);
      FetchAPI(url)
        .then(data => {
          if(data && Object.keys(data).length > 0) {
            setData(data);
          } else {
            setData(null);
          }
          console.log(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };
  
  return (
    <main className="bg-white grid grid-cols-12 flex items-center justify-center">
      <Search handleClick={handleClick} />
      <BookInfo data={data} />
    </main>
  );
}
