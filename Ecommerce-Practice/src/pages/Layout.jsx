import React from 'react'
import navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
