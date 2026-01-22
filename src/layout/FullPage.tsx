import type { ReactNode } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type FullPageProps = {
  children: ReactNode;
}

const FullPage = ({children} : FullPageProps) => {
  return (
    <>
        <Navbar />
          {children}
        <Footer />
    </>
  )
}

export default FullPage;