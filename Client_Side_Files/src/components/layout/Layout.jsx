import React from 'react'
import Header from '../header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import Workex from '../workex/workex'
import Skillset from '../skillset/skillset'
import Home from '../home/home'
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
















