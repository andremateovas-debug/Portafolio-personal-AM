import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  const [currentSection, setCurrentSection] = useState('hero')
  const [visible, setVisible] = useState(true)

  const clickNav = (id) => {
    setVisible(false)
    setTimeout(() => {
      setCurrentSection(id)
      setVisible(true)
    }, 300)
  }

  const sections = {
    hero: <Hero onNav={clickNav}/>,
    about: <About />,
    skills: <Skills />,
    contact: <Contact />,
  }

  return (
    <div>
      <Navbar onNav={clickNav} />
        <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
          {sections[currentSection]}
        </div>
      
    </div>
  )
}

export default App