import {React, useState} from 'react';
export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [emailID, setEmailID] = useState("");
  const [contact, setContact] = useState("");
  const [comments, setCommentsPara] = useState("");
  const [Button_text, setButtonText] = useState("Send Message");
  
  
  const submit_data = async (event)=> {
    //Send Req to Backend Server using Fetch and get the Response

    event.preventDefault();

    setButtonText("Message Sent Successfully!");

    const response = await fetch("http://localhost:5138/submit", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({fullname, emailID, comments})
    })

    console.log(response);
  }

  return (
    <>
    <div className="external_holder w-[90vw] h-[90vh] flex justify-around mx-auto">
      <div className="left_portion w-[50%] h-[90%] p-6 mt-8">
        <form method='post' className='flex-col' onSubmit={submit_data}>
          <label htmlFor="fullname" className='font-semibold'> Name: </label>
          <br></br>
          <input type="text" value={fullname} onChange={(event)=> {setFullname(event.target.value)}} className="border-2 border-blue-900 w-full rounded-lg p-2 m-2"/>
          
          <br></br>
          <br></br>

          <label htmlFor="email" className='font-semibold'> Email: </label>
          <br></br>
          <input type="email" value={emailID} onChange={(event)=> {setEmailID(event.target.value)}} className='border-2 border-blue-900 w-full rounded-lg p-2 m-2'/>
          <br></br>
          <br></br>
          {/* <label htmlFor="contact" className='font-semibold'> Contact: </label>
          <br></br>
          <input type="number" value={contact} onChange={(event)=> {setContact(event.target.value)}} className='border-2 border-black w-full rounded-lg p-2 m-2'/> */}
          {/* <br></br>
          <br></br> */}
          <label htmlFor="comments" className='font-semibold'> Any Comments(optional) </label>
          <br></br>
          <textarea value={comments} onChange={(event)=> {setCommentsPara(event.target.value)}} className='border-2 border-black w-full h-[15vh] rounded-lg p-2 m-2' placeholder='Comments(Optional)'/>
          <button className={`w-full border-2 ${Button_text == "Message Sent Successfully!" ? "border-green-700  bg-green-700 text-white font-extrabold" : "border-blue-900 bg-blue-900 text-white"} p-2 rounded-lg m-2 text-center text-white'`} type='submit'> {Button_text} </button>
        </form>
      </div>
      
      <div className="right_portion w-[35%] h-[90%] flex flex-col gap-6 justify-center items-center">
      <h1 className="right_heading mb-10 -mt-10 font-bold text-3xl text-center text-black"> Let's Grow Together!!!  </h1>
         <img src="/src/components/contact/images(1).jpg" alt="lalit" className='bg-white scale-[1.4] mb-6' />
      </div>
      </div>
    </>
  );
}
