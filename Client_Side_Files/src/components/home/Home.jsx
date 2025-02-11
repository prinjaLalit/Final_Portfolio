// import React, {useState}from 'react';

// //NEXT: Create Feature where the Description of your work is visible only when you click the Arrow button
// //USE EFFECT will be used wrt state of the arrow button
// export default function Home() {
// /*We will be initialising an Array of 3 elements....and then manually explicitly push divs into the array
//     and then Render that Array within a Div(acting as the externalmost column flex div) on the UI

// We will be giving a functionality to "Sort Work Experiences from Oldest to Recent" by giving a Button
// On Click of that Button, a function will be called that will Reverse the Array

// UseState and SetState will be used to Manage the State of the Array and to ensure that any change happening 
// on the array within the JavaScript Console will be Rendered on the UI as well....

// A Shallow Copy of the Array will be used to perform the Reversing Logic given that we know React doesnt 
// Consider any State Updations in the Array until its Memory Structure & Management Changes*/

// const [divs_arr, updateDivsArray] = useState([<div className='individual_div w-[80vw] h-1/4 text-center mx-auto m-6 border-4 flex justify-between'>
// <div className="text_info w-[90%] h-5/6 flex-col justify-center">

//     <h1 className='text-2xl font-bold'> Web Developer Intern @ Mappen </h1>
//    <h2> Developed the Front-End of official website of PropXChange, a Gurugram-based real estate firm, using HTML, CSS, Bootstrap, and JavaScript, implemented a responsive design  supporting over 98% mobile and tablet compatibility, along with dynamic input validation through event listeners  </h2>
//  </div>

//  <div className="scroll_logo absolute left-[85%] flex justify-center items-center">
//     <box-icon name='down-arrow' type='solid' color='#391e99' size='md'></box-icon>
//  </div>

// </div>, 
// <div className="individual_div w-[80vw] h-1/4 mx-auto text-center m-6 border-4 flex justify-between">
// {/* <div className="image_div w-1/3 h-full flex justify-center items-center">
//     <img src="https://media.licdn.com/dms/image/v2/D560BAQHcL7JTPNGWVg/company-logo_200_200/company-logo_200_200/0/1719257004277?e=1743638400&v=beta&t=ftD4R60ZV9axhkhB8NEJClUcmmwhxFRx-gt7cEeF4Is" alt="logo" className='scale-[0.5]'/>
// </div>   */}
// <div className="text_info w-[90%] h-5/6">
// <h1 className='text-2xl font-bold'> Campus Ambassador Intern @ MastersBuddy </h1>
//    <h2> Developed the Front-End of official website of PropXChange, a Gurugram-based real 
// estate firm, using HTML, CSS, Bootstrap, and JavaScript, implemented a responsive design 
// supporting over 98% mobile and tablet compatibility, along with dynamic input validation 
// through event listeners </h2>
//  </div>

//  <div className="scroll_logo absolute left-[85%] flex justify-center items-center">
//     <box-icon name='down-arrow' type='solid' color='#391e99' size='md'></box-icon>
//  </div>
 

//  </div>, <div className="individual_div w-[80vw] h-1/4 text-center mx-auto m-6 border-4 flex justify-between">
 
//  <div className="text_info w-[90%] h-5/6">
//  <h1 className='text-2xl font-bold'> Executive Member @ LEO Club Chandigarh Fortune </h1>
//    <h2> Contributed to impactful awareness and social campaigns, including organizing blood donation drives across the tricity. My efforts focused on fostering community engagement, raising awareness on critical issues, and promoting social responsibility, showcasing my commitment to meaningful change and humanitarian service. </h2>
//  </div>
//  <div className="scroll_logo absolute left-[85%] flex justify-center items-center">
//     <box-icon name='down-arrow' type='solid' color='#391e99' size='md'></box-icon>
//  </div>
 

// </div>]);

// let shallow_divs_arr;
// let arr_size = divs_arr.length;

// function Sort_Experiences()
// {
//     let temp;
//     //Create a Shallow Copy of the Divs Array
//      shallow_divs_arr = [...divs_arr]; //Creating Shallow Copy of Array using '...' spread operator
//      //React doesnt detect state change of an array until theres a change in the memory structure of array
//      //Perform Reversing Operation on this Array
//      for(let i = 0; i<arr_size/2; i++)
//      {
//         temp = shallow_divs_arr[arr_size-i-1];
//         shallow_divs_arr[arr_size-i-1] = shallow_divs_arr[i];
//         shallow_divs_arr[i] = temp;
//      }
//      //Now after reversing the Array, the new Updated Array has to be Rendered on the UI as well
//      //via State Updation & Change using "UseState"
//      //Update divs_array via setstate

//      updateDivsArray(shallow_divs_arr);
// }

//   return (
// <>
//     <div className="external_holder_div  h-[80vh] w-[100vw] border-b-2 flex-col justify-evenly">
        
//         {divs_arr}

//         <button className='relative bottom-0 left-1/2 bg-blue-800 text-white p-2 rounded-md font-semibold' onClick={Sort_Experiences}> Sort </button>
//     </div>
// </>
//   );
// }




import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Work experience data array
  const experienceData = [
    {
      title: "Web Developer Intern @ Mappen",
      description:
        "Developed the Front-End of official website of PropXChange, a Gurugram-based real estate firm, using HTML, CSS, Bootstrap, and JavaScript. Implemented a responsive design supporting over 98% mobile and tablet compatibility, along with dynamic input validation through event listeners.",
    },
    {
      title: "Campus Ambassador Intern @ MastersBuddy",
      description:
        "Developed the Front-End of official website of PropXChange, a Gurugram-based real estate firm, using HTML, CSS, Bootstrap, and JavaScript. Implemented a responsive design supporting over 98% mobile and tablet compatibility, along with dynamic input validation through event listeners.",
    },
    {
      title: "Executive Member @ LEO Club Chandigarh Fortune",
      description:
        "Contributed to impactful awareness and social campaigns, including organizing blood donation drives across the tricity. My efforts focused on fostering community engagement, raising awareness on critical issues, and promoting social responsibility, showcasing my commitment to meaningful change and humanitarian service.",
    },
  ];
  const [timeline_arr, setTimeline] = useState(["(June 2024 - August 2024)", "(June 2023 - July 2023)", "(October 2023 - October 2024)"]);
  
const [skills_data, setSkillsData] = useState([{skill1 : "JavaScript", skill2: "CSS", skill3: "HTML"}, {skill1: "Communication", skill2: "Marketing"}, {skill1: "Leadership", skill2: "Public Speaking", skill3: "Public Relations"}]);
const [workExperiences, setWorkExperiences] = useState(experienceData);
const [workex_state, setWorkExState] = useState("Recent to Oldest");

  // Function to reverse experiences order
  const sortExperiences = () => {
    setWorkExperiences([...workExperiences].reverse()); // Creates a new array to trigger state update

    const shallow_skills_data = [...skills_data]; //Creating a Shallow Copy of the Array before Reversing
    //Such that React detects the State updation of the array bia change in memory management
    setSkillsData(shallow_skills_data.reverse());
    // setWorkExState("Oldest to Recent");
    if(workex_state == "Recent to Oldest")
    {
      setWorkExState("Oldest to Recent");
    }
    else
    {
      setWorkExState("Recent to Oldest");
    }
  };

  
  


  return (
    <>
      <div className="external_holder_div h-[150vh] w-[100vw] border-b-2 flex-col justify-evenly">
{/*          
            <div className="scroll_logo absolute left-[85%] flex justify-center items-center">
              <box-icon name="down-arrow" type="solid" color="#391e99" size="md"></box-icon>
            </div> */}
      <div className="initial_div w-full h-[10vh] flex justify-center gap-6 items-center">      
        <h1 className="font-bold text-3xl text-center"> Work Experiences </h1>
        <button className="bg-blue-800 text-white p-2 rounded-md font-semibold" onClick={sortExperiences}>
          {workex_state}
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        </div>
        {/* Dynamically rendering divs using map() */}
        {workExperiences.map((exp, index) => (
          
         <div className="external_bordering_div border-l-4 border-l-black w-[80vw] mx-auto">
           
          <FontAwesomeIcon icon={faCircle} className="text-white border-2 border-black rounded-2xl absolute left-15 -ml-3 -mt-4 scale-105"/>
          <div key={index} className="individual_div w-[95%] h-1/4 text-center mx-auto m-6 p-4 border-4 flex justify-between pr-5">
          <FontAwesomeIcon icon={faBriefcase} className="scale-[1.75] my-auto ml-4" />
            <div className="text_info w-[90%] h-5/6 flex-col">
              <h1 className="text-2xl font-bold">{exp.title}</h1>
              <h1 className="text-2xl font-bold"> {timeline_arr[index]} </h1>
              <h2>{exp.description}</h2>
              <div className="skills_used h-full w-full flex items-center justify-around mt-4">
                <div className="skill_item border-2 border-blue-900 rounded-lg p-1 bg-blue-900 text-white"> SKILLS: </div>
                <div className="skill_item font-bold border-2 border-black rounded-lg p-1"> {skills_data[index].skill1} </div>
                <div className={`skill_item font-bold ${skills_data[index].skill2 ? "border-2 border-black rounded-lg" : ""} p-1`}> {skills_data[index].skill2} </div>
                <div className={`skill_item font-bold ${skills_data[index].skill3 ? "border-2 border-black rounded-lg p-1" : ""}`}> {skills_data[index].skill3} </div>
              </div>
            </div>
            
            {/* <div className="scroll_logo absolute left-[85%] flex justify-center items-center">
              <box-icon name="down-arrow" type="solid" color="#391e99" size="md"></box-icon>
            </div> */}
            
          </div>
         
          </div>
          
         
          
        ))}

        {/* Sort Button */}
        {/* <button
          className="relative bottom-0 left-1/2 bg-blue-800 text-white p-2 rounded-md font-semibold"
          onClick={sortExperiences}>
          Sort
        </button> */}
      </div>
    </>
  );
}
