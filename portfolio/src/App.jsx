import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './pages/Header/Header.jsx'
import Project from './pages/Project/Projects.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <Project/>
    </>
  )
}

export default App
