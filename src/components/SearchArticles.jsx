import React, {useState} from 'react';
import {UilSearch} from "@iconscout/react-unicons"



function SearchArticles() {
  let [value,setValue] = useState("Article");
  async function ak(){
    
    let response = await fetch("https://newsapi.org/v2/everything?q=cuaca&from=2022-11-13&sortBy=date&apiKey=69656df3fd4048a8b16b9a0d4d5556f2");
    let result = await response.json();
    console.log(result);
    console.log(result.articles);
    let p = result.articles.map((a)=>{return (
      <div class=" bg-slate-100 max-w-sm  rounded-lg  overflow-hidden shadow-lg  border-4">
        <img class="w-full" src={a.urlToImage} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{a.title}</div>
          <p class="text-gray-700 text-base">
            {a.description}
          </p>
          <a className=' flex  justify-center inline-block bg-gray-200 rounded-full px- py-2 text-sm font-semibold text-gray-700 my-2 mb-2 font-bold '
          href={a.url}>Buka Artikel</a>
        </div>
      </div>
    )})
    console.log(p);
    setValue(p); 
     
    
  }
  ak();
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
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {value}
        </div> 
       
    </div>
  )
}

export default SearchArticles;
