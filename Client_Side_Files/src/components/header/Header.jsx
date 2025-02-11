import {React, useState} from 'react'
import { Link} from 'react-router-dom'
// import './src/index.css'
// import './header.css'
export default function Header() {
  const [navClickStatus, setNavClickStatus] = useState(null);
  const [link_arr, setLinkArr] = useState(["Skillset", "Experience", "Education", "Contact"]);
  const [paths_arr, setPathsArr] = useState(['/skillset', '/workex', '/education' , '/contact']);
//Even Dynamically Rendering the PAths to the Links
  return (
<>
<div className="nav_container flex w-[100vw] h-[10vh] border-b-4 bg-white text-black font-semibold sm:justify-end">
        <div className="logo mx-auto flex flex-row items-center text-lg sm:items-center sm:ml-1 sm:pr-2">
          <Link to='/home' className='text-blue-950 font-bold'> Prinja </Link>
        </div>

        {/* For small screens, position at the bottom, for larger screens position at top-right */}
        <div className="fixed bottom-4 left-10 bg-white flex gap-4 justify-center items-end sm:h-[7vh] sm:fixed sm:ml-4 sm:top-2 right-4 sm:items-center sm:justify-end sm:pr-6 sm:flex sm:gap-4;">
         
        {link_arr.map((link_item, index)=>(
            <Link key={index} className={`list_item font-semibold text-md text-blue-950 ${navClickStatus ==  index ? "bg-blue-800 text-white p-2 border-1 rounded-lg" : ""}`} onClick={()=> setNavClickStatus(index)} to={paths_arr[index]}> {link_item}</Link>
        ))}
        </div>
      </div>

      </>
  )
}
