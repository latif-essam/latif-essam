import React from 'react'
import Sidebar from './../Sidebar/index'

interface LayoutProps {
  children?: ChildNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
    </>
  )
}

export default Layout
