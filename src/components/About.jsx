import { useState } from 'react'
import andre from '../assets/images/andre.png'
import iconopaint from '../assets/images/icons/paintnet.png'
import goodbartendericono from '../assets/images/icons/goodbartender.png'




import about from '../data/about.js'

const skills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Lógica, DOM, fetch, ES6+' },
  { name: 'html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Estructura y semántica web' },
  
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Componentes, hooks, estado' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Scripts, ML, MediaPipe' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Control de versiones, GitHub' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', desc: 'Unity, TCP bridges, lógica' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', desc: 'Desarrollo de videojuegos 3D' },
  { name: 'Godot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg', desc: 'GDScript, juegos 2D/móvil' },
  { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', desc: 'Modelado 3D básico' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', desc: 'Lenguaje base de Flutter' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', desc: 'Apps móviles multiplataforma' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Bases de datos, queries, relaciones' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', desc: 'Backend, APIs, sistemas web' },
  { name: 'Paint.NET', icon: iconopaint, desc: 'Edición de sprites y assets' },
]

const projects = [
  { name: 'Good Bartender', description: 'Videojuego de novela visual y simulación para móvil y PC sobre coctelería, desarrollado en Godot Engine.', link: 'https://andremateov.sg-host.com/', cover: goodbartendericono},
  { name: 'SIGNAL', description: 'Prototipo de intérprete a tiempo real de lenguaje de señas con MediaPipe y scikit-learn.', link: '', cover: null },
  { name: 'Mesa de Luna', description: 'Página web del restaurante Mesa de Luna con sistema de reservas e inventario.', link: 'https://mesadeluna.com', cover: null },
]

function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        
        <div className="flex flex-col items-center mb-4">
          <img
            src={andre}
            alt="André Mateo"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">André Mateo</h2>
          <p className="text-gray-400 text-center max-w-xl text-sm leading-relaxed">
            {about.description}
          </p>
        </div>

        
        <div className="w-px h-10 bg-white/20" />

        
        <div className="w-full">
          <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-6">
            Stack & Herramientas
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-xl p-4"
              >
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                <span className="text-xs text-gray-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        
        <div className="w-px h-10 bg-white/20 mt-8" />

        {/* ── PROYECTOS ── */}
        <div className="w-full">
          <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-6">
            Proyectos
          </h3>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex gap-6 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-xl overflow-hidden"
              >
                
                <div className="w-40 h-28 bg-white/10 flex-shrink-0 flex items-center justify-center text-gray-600 text-xs">
                  {project.cover
                    ? <img src={project.cover} alt={project.name} className="w-full h-full object-cover" />
                    : 'Sin imagen'
                  }
                </div>
                
                <div className="flex flex-col justify-center py-4 pr-6">
                  <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
                  {project.link && (
                    
                    <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:underline w-fit"
                    >
                      Ver proyecto →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About