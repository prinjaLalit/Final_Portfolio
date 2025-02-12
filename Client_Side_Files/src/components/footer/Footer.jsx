import {React, useState, useEffect, useRef} from 'react'
import 'boxicons'
import { Link } from 'react-router-dom'
export default function Footer() {

  let [Empty_String, setEmptyString] = useState("");
  const typingPhase = useRef(null);
  const deletingPhase = useRef(null);
  const complete_str_even = "Connect";
  const complete_str_odd = "Explore";
  const [cycleNumber, setCycleNumber] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track typing completion
  let targetString;

  
  useEffect(() => {
   
  
    if (cycleNumber > 5)
      {
        setEmptyString("Connect");
        return; 
      } // Stop after 5 cycles

    if (typingPhase.current)
      {
        clearInterval(typingPhase.current);
      }
    if (deletingPhase.current) 
      {
        clearInterval(deletingPhase.current);
      }
      
      if(cycleNumber == 0 || cycleNumber == 2 || cycleNumber == 4)
        {
          targetString = complete_str_even;
        }
        else if(cycleNumber == 1 || cycleNumber == 3 || cycleNumber == 5)
        {
          targetString = complete_str_odd;
        }
        
     

    typingPhase.current = setInterval(() => {
      
      setEmptyString((prev) => {
        if (prev.length < targetString.length)
        {
          prev = prev + targetString[prev.length];
          return prev;
        }
        else
        {
          clearInterval(typingPhase.current);
          setTimeout(() => setIsTypingComplete(true), 1500); // Mark typing complete
          return prev;
        }
      });
    }, 200);

    return () => {
      clearInterval(typingPhase.current);
      clearInterval(deletingPhase.current);
    };
    
  }, [cycleNumber]);

  useEffect(() => {
    if (!isTypingComplete)
      {
        return;
      } // Wait until typing completes

    deletingPhase.current = setInterval(() => {
      setEmptyString((prev) => {
        if (prev.length > 0)
        {
          return prev.slice(0, -1);
        } 
        else
        {
          clearInterval(deletingPhase.current);
          setCycleNumber((prev) => prev + 1);
          // setJobTitle(complete_str_odd);
          // targetString = complete_str_odd;
          setIsTypingComplete(false); // Reset typing completion
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(deletingPhase.current);
  }, [isTypingComplete]);






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
