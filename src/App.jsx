import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Fetuses } from './components/Fetuses'
import { Totop } from './components/Totop'
import { Offer } from './components/Offer'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-black text-white scroll-smooth select-none justify-center'>
          <Navbar/>
          <Home/>
          <Fetuses/>
          <Totop/>
          <Offer/>
          <About/>
          <Contact/>
          

          
      </div>
  )
}

export default App
