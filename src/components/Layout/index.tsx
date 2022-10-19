import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './../Sidebar/index'
import './index.scss'
interface LayoutProps {
  children?: ChildNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <span className="tags bottom-tags">
          <span className="bottom-tag-html">Latif Essam@SocWork.Co</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
