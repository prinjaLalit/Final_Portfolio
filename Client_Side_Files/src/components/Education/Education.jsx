import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  const [headings_arr, setHeadings] = useState(["Punjabi University Patiala", "D.C. Model Sr. Sec. School, Ferozepur", "D.C. Model Sr. Sec. School, Ferozepur"]);
  const [course_names, setCourseNames] = useState(["B.Tech(Computer Science & Engineering)", "High School Matriculation", "Primary Education"]);
  const [timelines_Arr, setTimelines] = useState(["2022 - 2026", "2020 - 2022", "2009 - 2020"]);
  const [descriptions_arr, setDescriptions] = useState(["Major Coursework: Data Structures & Algorithms, DBMS, Web Fundamentals", "Positions of Responsibility: President- Spotlight Club(Dramatics & Theatre Club)", ""]);
  const [ordering_state, setOrder] = useState("Recent to Oldest");
  
  const sortEducationDivs = () => {
    //Reverse all the data arrays being rendered on the Ui one by one
    const shallow_headings_arr = [...headings_arr]; //Created a Shallow Copy
    setHeadings(shallow_headings_arr.reverse());

    const shallow_course_names = [...course_names];
    setCourseNames(shallow_course_names.reverse());

    const shallow_timelines_arr = [...timelines_Arr];
    setTimelines(shallow_timelines_arr.reverse());

    const descriptions_arr_shallow = [...descriptions_arr];
    setDescriptions(descriptions_arr_shallow.reverse());

    if(ordering_state == "Recent to Oldest")
    {
    setOrder("Oldest to Recent");
    }
    else{
      setOrder("Recent to Oldest")
    }
}

  return (
    <>
      <div className="external_holder_div h-[100vh] w-[100vw] border-b-2 flex-col justify-evenly">
            <div className="initial_div w-full h-[10vh] flex justify-center gap-6 items-center">      
              <h1 className="font-bold text-3xl text-center"> Education </h1>
              <button className="bg-blue-800 text-white p-2 rounded-md font-semibold" onClick={sortEducationDivs}>
                {ordering_state}
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>

          {headings_arr.map((item, index)=>(
          <div className="external_bordering_div border-l-4 border-l-black w-[80vw] mx-auto" key={index}>
            <FontAwesomeIcon icon={faCircle} className="text-white border-2 border-black rounded-2xl absolute left-15 -ml-3 -mt-4 scale-105"/>
            <div key={index} className="individual_div w-[95%] h-1/4 text-center mx-auto m-6 p-4 border-4 flex justify-between pr-5">
            <FontAwesomeIcon icon={faBriefcase} className="scale-[1.75] my-auto ml-4" />
                <div className="text_info w-[90%] h-5/6 flex-col" key={index}>
                    <h1 className="text-2xl font-bold">{headings_arr[index]}</h1>
                    <h1 className="text-2xl font-bold">
                      {timelines_Arr[index]} 
                    </h1>
                    <h2 className='text-xl font-semibold'>{course_names[index]}</h2>
                    <h3> {descriptions_arr[index]} </h3>

                </div>
              </div>
         
         </div> 

  ))};
</div>
        
    </>
  );
}
