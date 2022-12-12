import React from 'react'

function Navbar(){
    return(
      <header>
        <h3>TALOKAN</h3>
        <nav>
            <a href='/#'>Daily</a>
            <a href='/#'>Week</a>
            <a href='/#'>Blog</a>
            <a href='/#'>kosongan</a>
            <div className='flex w-full items-end'>
              <input size="lg" label="search" />
            </div>
        </nav>
      </header>  
    );
}

export default Navbar;