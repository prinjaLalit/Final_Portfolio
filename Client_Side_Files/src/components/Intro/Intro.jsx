// import {React, useState, useRef, useEffect} from 'react'
// export default function Intro() {

//   const [erasable_job_title, setJobTitle] = useState("");
//   let typingPhase = useRef(null);
//   let deletingPhase = useRef(null);
//   let complete_str_even = "Software Developer";
//   let complete_str_odd = "Full-Stack Engineer";
//   const [cycleNumber, setCycleNumber] = useState(0);
//   const [isTypingComplete, setIsTypingComplete] = useState(false); 

//   useEffect(() => {
//     if(cycleNumber > 5)
//     {
//       return;
//     }

//     if(typingPhase.current)
//     {
//       clearInterval(typingPhase.current);
//     }
//     if(deletingPhase.current)
//     {
//       clearInterval(deletingPhase.current);
//     }

//     typingPhase.current = setInterval(() => {
//       if(cycleNumber == 0 || cycleNumber == 2 || cycleNumber == 4)
//       {
//         setJobTitle((prev)=> {
//           if (!prev) prev = "";

//           if(prev.length < complete_str_even.length)
//           {
//             prev = prev + complete_str_even[prev.length];
//             return prev;
//           }
//           else{ //jab puri string likhi jaaye
//               clearInterval(typingPhase.current);
//               //2second baad Deletion Interval ka Execution Start krvaado
//               // setTimeout(Deletion_function, 1500);
//               setTimeout(() => setIsTypingComplete(true), 1500);
              
//           }
//         })
//       }
//       else if(cycleNumber == 1 || cycleNumber == 3 || cycleNumber == 5)
//       {
//         setJobTitle((prev)=> {
//           if (!prev) prev = "";

//           if(prev.length < complete_str_odd.length)
//           {
//             prev = prev + complete_str_odd[prev.length];
//             return prev;
//           }
//           else{ //jab puri string likhi jaaye
//               clearInterval(typingPhase.current);
//               //2second baad Deletion Interval ka Execution Start krvaado
//               setTimeout(Deletion_function, 2000);
              
//           }
//         })
//       }
//     }, 500);

//   return () => {
//     clearInterval(typingPhase.current);
//     clearInterval(deletingPhase.current);
//   }
// }, [cycleNumber]);

// useEffect(() => {
//   if (!isTypingComplete) return; // Wait until typing completes

//   deletingPhase.current = setInterval(() => {
//     setJobTitle((prev) => {
//       if (prev.length > 0) {
//         return prev.slice(0, -1);
//       } else {
//         clearInterval(deletingPhase.current);
//         setCycleNumber((prev) => prev + 1);
//         setIsTypingComplete(false); // Reset typing completion
//         return prev;
//       }
//     });
//   }, 100);

//   return () => clearInterval(deletingPhase.current);
// }, [isTypingComplete]);

import { React, useState, useRef, useEffect } from "react";

export default function Intro() {
  const [erasable_job_title, setJobTitle] = useState("");
  const typingPhase = useRef(null);
  const deletingPhase = useRef(null);
  const complete_str_even = "Software Developer";
  const complete_str_odd = "Full-Stack Engineer";
  const [cycleNumber, setCycleNumber] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track typing completion
  let targetString;

  
  useEffect(() => {
   
  
    if (cycleNumber > 5)
      {
        setJobTitle("Full Stack Engineer");
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
      
      setJobTitle((prev) => {
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
      setJobTitle((prev) => {
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
    <div className="externalmost w-[100vw] h-[90vh] flex flex-row mx-auto">
      <div className="main_content_div w-[90%] h-[90%] mx-auto flex flex-col items-center justify-center p-2 gap-3">
        <h1 className='text-6xl font-extrabold text-blue-950'> I'm Lalit Prinja, a Self Taught</h1>
        <h1 className='text-6xl font-extrabold text-white bg-blue-950 border-2 border-black rounded-lg p-4'> {erasable_job_title} </h1>
        <h2 className='text-3xl font-semibold text-blue-950 underline'> Specialsing in MERN Stack </h2>
        <div className="buttons_div flex flex-row justify-around w-1/2 h-fit p-6">
          <button className="contact_me border-2 border-blue-900 rounded-md p-2 w-[45%] bg-blue-900 text-white font-semibold">
            Contact Me 
          </button>
          <button className="download border-2 border-blue-900 rounded-md p-2 w-[45%] bg-blue-900 text-white font-semibold">
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}
