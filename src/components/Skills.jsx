function Skills() {

const skills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Lógica, DOM, fetch, ES6+' },
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
  { name: 'Paint.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg', desc: 'Edición de sprites y assets' },
]

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-2 text-center">Skills</h2>
        <p className="text-gray-500 text-sm text-center mb-12 uppercase tracking-widest">
          Tecnologías y herramientas
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center gap-3 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-xl p-5"
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              <span className="text-sm font-semibold text-white">{skill.name}</span>
              <span className="text-xs text-gray-500 leading-relaxed">{skill.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
}
export default Skills