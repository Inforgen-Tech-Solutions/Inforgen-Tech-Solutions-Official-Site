import React from 'react'

import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const FooterOnly = () => {
  return (
    <>
        <Footer />
        <Outlet />
    </>
  )
}

export default FooterOnly