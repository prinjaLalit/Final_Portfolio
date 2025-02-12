import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
// import App from './App.jsx'
import {  createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
// import Home from './components/home/Home.jsx'
import Skillset from './components/skillset/Skillset.jsx'
import Workex from './components/workex/Workex.jsx'
import Contact from './components/contact/Contact.jsx'
import Education from './components/Education/Education.jsx'
import Intro from './components/Intro/Intro.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route index element={<Intro />} />
      <Route path='home' element={<Intro />} />
      <Route path='skillset' element={<Skillset />} />
      <Route path='workex' element={<Workex />} />
      <Route path='contact' element={<Contact />} />
      <Route path='education' element={<Education />} />
    </Route>
      
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
