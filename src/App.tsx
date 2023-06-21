import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import SignIn from './components/Login/SignIn'
import SignUp from './components/Login/SignUp'

function App() {
 

  return (
    <div className="App">
     
      <Routes>
      <Route path='/home' element={<HeroSection/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
      </Routes>
      
      <HeroSection/>
    
    </div>
  )
}

export default App
