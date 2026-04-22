import { useState, useEffect } from 'react'

function Navbar({ onNav }) {
  const links = [
    { label: 'AM', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' },
    { label: 'Inicio', id: 'hero' },
  ]


  const [scrolled, setScrolled] = useState(false)

    

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    
    
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-none'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <span className="font-bold text-lg tracking-tight">AM</span>


        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.id}>
              
                <a onClick= {() => onNav(link.id)}

                  className=" cursor-pointer text-sm text-black hover:text-gray-900 transition-colors duration-200"
                >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
