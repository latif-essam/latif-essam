import React from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import RoutesContainer from './routes/RoutesContainer'

function App() {
  return (
    <>
      <RoutesContainer>
        <Route path="/" element={<Layout />} />
      </RoutesContainer>
    </>
  )
}

export default App
