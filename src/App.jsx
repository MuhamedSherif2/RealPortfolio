import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Contact from './pages/Contact'
import AllProjects from './pages/projects/AllProjects'
import ProjectDetails from './pages/projects/ProjectDetails'

import Header from './component/Nav'
import { ContextProvider } from './Context'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<AllProjects />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
