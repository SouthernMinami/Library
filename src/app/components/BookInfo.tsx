'use client'

import React, { useState, useEffect } from 'react';
import FetchAPI from '../api/FetchAPI'; 

type Props = {
    url: string;
}

type BookData = {
    [key: string]: {
      title: string;
      subtitle: string;
      authors: { name: string }[];
      cover: { medium: string };
      number_of_pages: number;
      publish_date: string;
      subjects: { url: string }[];
    };
  };
const BookInfo = ({ url }: Props) => {
    const [data, setData] = useState<string[] | null>(null);

    useEffect(() => {
        FetchAPI(url).then(data => {
            setData(data);
        })
    }, [url]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='col-span-12'>
            {Object.keys(data).map((bookKey) => {
                const book = data[bookKey];
                return (
                    <div key={bookKey} className='flex border my-20'>
                        <img src={book.cover.medium} alt={book.title} className='p-10' />
                        <div className='p-10'>
                            <h1 className='text-4xl'>{book.title}</h1>
                            <h1 className='text-2xl mt-2'>Written by: <i>{book.authors[0].name}</i></h1>

                            <div className='mt-3'> 
                                <div className=''>
                                    <p>Pages: {book.number_of_pages}</p>
                                    <p>Published Year: {book.publish_date}</p>
                                </div>
                            </div>

                            <div className='mt-9'>
                                <p><i>Need more information? Click the links below.</i></p>
                                <div className='flex flex-row'>
                                    <a href={book.subjects[0].url} className='bg-blue-500 text-white p-2 rounded-lg hover:bg-gray-600'>About the Book</a>
                                    <a href={book.subjects[1].url} className='bg-blue-500 text-white p-2 rounded-lg hover:bg-gray-600 ml-2'>About the Author</a>
                                </div>
                            </div>  
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookInfo;
