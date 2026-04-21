import { useState, useEffect } from 'react'

function Navbar() {
  const links = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
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
            <li key={link.href}>
              
               <a href={link.href}
                className="text-sm text-black hover:text-gray-900 transition-colors duration-200"
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
