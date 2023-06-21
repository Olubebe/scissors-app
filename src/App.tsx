import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
    </div>
  )
}

export default App
