import { useState, useEffect } from 'react'

import fondo from '../assets/images/fondohero.png'

function Hero({onNav}) {
  const links = [
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'Contact' },
  ]
  
  const roles = [
    'Fullstack Developer',
    'Desarrollador web',
    'Desarrollador de videojuegos',
    'Fundador de AM Devs',
    'Creador de contenido',
    'Ingeniero en desarrollo de software',
]

  const [currentRole, setCurrentRole] = useState(0) // Estado para controlar el rol actual
  const [visible, setVisible] = useState(true) // Estado para controlar la visibilidad del rol actual


  useEffect(() => {
    const interval = setInterval(() => {
        setVisible(false)
        
        setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length) 
            
        }, 500)

        setTimeout(() => {
            setVisible(true)
        }, 1500)

    },5000)
    return () => clearInterval(interval)
  }, [])


//     setTimeout(() => {
//      setVisible(false)
//      }, 500)




  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-6"
        style={{ backgroundImage: `url(${fondo})`} }
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
          Cabo San Lucas, BCS — México
        </p>

        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          André Mateo Vásquez Mosqueda
        </h1>





        <p className= "text-2xl text-white font-medium mb-6 h-9 transition-opacity duration-700" 
            style={{ opacity: visible ? 1 : 0 }}   
        >
          {roles[currentRole]}
        </p>



        <p className="text-white text-lg max-w-xl mb-10 leading-relaxed">
          Desarrollador de software con enfoque en web y videojuegos. 
          Fundador de AM Devs. Creador de proyectos reales como 
          Good Bartender, SIGNAL y Mesa de Luna, creador de contenido y tecnico en equipos de computo.
        </p>


        
        <div className="flex gap-4">
        <button
          onClick={() => onNav('projects')}
          className="bg-black text-white text-sm px-6 py-3 rounded-lg hover:bg-transparent transition-colors duration-200"
        >
          Ver proyectos
        </button>

        <button
          onClick={() => onNav('contact')}
          className="bg-black text-white text-sm px-6 py-3 rounded-lg hover:bg-transparent transition-colors duration-200"
        >
          Contacto
        </button>
        </div>
      </div>
    </section>
  )
} 

export default Hero