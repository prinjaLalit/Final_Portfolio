import {React, useState, useEffect, useRef} from 'react'
import 'boxicons'
import { Link } from 'react-router-dom'
export default function Footer() {

let [Empty_String, setEmptyString] = useState("Connect");

  return (
<>
    <div className='w-[100vw] border-b-4 flex-col justify-end items-center p-4 gap-8'>
        
      <h1 className='text-center text-blue-950 font-bold text-3xl mb-5'> Let's {Empty_String} </h1>
      
        <div className="social_icons_div flex justify-evenly items-center h-[8vh] w-[100vw]">
           <Link to='https://www.linkedin.com/in/lalit-prinja'> 

                <box-icon name='linkedin-square' type='logo' color='#0a0a73' size='md'></box-icon>
                <h2 className='text-center'> LinkedIn </h2>
            </Link>
            <Link to='https://www.instagram.com'>
                <box-icon name='instagram' type='logo' color='#0a1566' size='md' ></box-icon>
                <h2 className='text-center'> Instagram </h2>
            </Link>
            <Link to='#'>
                <box-icon name='twitter' type='logo' color='#0b176b' size='md'></box-icon>
                <h2 className='text-center'> Twitter </h2>
            </Link>
            <Link to='#'>
                <box-icon name='reddit' type='logo' color='#0b1665' size='md'></box-icon>
                <h2 className='text-center'> Reddit </h2>
            </Link>
    </div>
    </div>
</>
  );
}
