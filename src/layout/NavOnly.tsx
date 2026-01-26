import type {ReactNode } from 'react';
import Navbar from '../components/Navbar';

type NavOnlyProps = {
  children: ReactNode
}

const NavOnly = ({children} : NavOnlyProps) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default NavOnly