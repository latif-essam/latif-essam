import React from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layout from './components/Layout'
import RoutesContainer from './routes/RoutesContainer'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Portfolio from './components/Portfolio/index'

function App() {
  return (
    <>
      <RoutesContainer>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </RoutesContainer>
    </>
  )
}

export default App
