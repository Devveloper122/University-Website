import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Mainheader = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Mainheader
