import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Quiz from './components/Quiz/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz/:id/:q" element={<Quiz />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
