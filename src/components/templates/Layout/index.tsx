import React, { PropsWithChildren } from 'react'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
