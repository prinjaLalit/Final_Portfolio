import React from 'react'
import "devicon/devicon.min.css";

// import { useState } from 'react';

export default function Skillset() {

  /*Using the Approach of Dynamically creating Divs by iterating over already available static data 
  similar to the approaches used in table management of react*/

  const skills_arr = ["HTML", "CSS", "JavaScript", "React.Js", "Node.js", "Express.Js", "Redux toolkit", "Version Control", "Tailwind CSS"];
  const icons_arr = [
    <i className="devicon-html5-plain colored text-5xl"></i>,
    <i className="devicon-css3-plain colored text-5xl"></i>,
    <i className="devicon-javascript-plain colored text-5xl"></i>,
    <i className="devicon-react-original colored text-5xl"></i>,
    <i className="devicon-nodejs-plain colored text-5xl"></i>,
    <i class="devicon-redux-plain text-5xl"></i>,
    <i className="devicon-java-plain colored text-5xl"></i>,
    <i class="devicon-github-plain text-5xl"></i>,

    <i class="devicon-tailwindcss-plain text-5xl"></i>

  ];

  return (
  <div className='externalmost h-[100vh] w-[100vw] mx-auto flex-col'>
    <h1 className='text-center font-bold text-2xl'> Technical Stack: </h1>
    <div className="external_div h-[90vh] w-[90vw] border-4 mx-auto grid grid-rows-3 grid-cols-3">
      {skills_arr.map((skill, index) => (
        <div
          className="w-[30vw] h-[30vh] border-2 flex flex-col justify-center items-center font-extrabold"
          key={index}
        >
          {icons_arr[index]} {/* Icon corresponding to the skill */}
          <p className="mt-2">{skill}</p> {/* Display skill name */}
        </div>
      ))}
    </div>
    </div>
  );
}
