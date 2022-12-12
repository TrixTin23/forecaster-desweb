import React from 'react';
import {UilSearch} from "@iconscout/react-unicons"

export default function SearchArticles() {
  return (
    <div className='my-4'>
        <div>
            <h1 className='flex items-center justify-center text-2xl text-white font-poppin'>
                Weather Articles
            </h1>
        </div>
        <div className='flex flex-row justify-center my-4 items-center space-x-4 '>
          <input type="text" placeholder="Search Article..." className='p-2  focus:outline-none'/>
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
    </div>
  )
}
