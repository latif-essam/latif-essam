import React from 'react'
import { Routes } from 'react-router-dom'

interface RoutesContainerProps {
  children?: any
}
const RoutesContainer = ({ children }: RoutesContainerProps) => {
  return <Routes>{children}</Routes>
}

export default RoutesContainer
