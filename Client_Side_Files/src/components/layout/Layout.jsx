import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Workex from '../workex/Workex'
import Skillset from '../skillset/Skillset'
// import Home from '../home/home'
import Contact from '../contact/Contact'
import Education from '../Education/Education'

export default function Layout() {
  return (
    <>
    <Header></Header>
   
   <Outlet />
    <Footer />
    </>
  )
}
















