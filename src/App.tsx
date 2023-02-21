import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/shared/Navbar'
import "./App.css"
import Sidebar from './components/shared/Sidebar'
import Footer from './components/shared/Footer'
import About from './pages/About'
import Items from './pages/Items'
import UploadForm from './pages/UploadForm'
import FilteredItems from './pages/FilteredItems'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/items' element={<Items />} />
        <Route path='/upload-product' element={<UploadForm />} />
        <Route path='/filtered-items' element={<FilteredItems />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
