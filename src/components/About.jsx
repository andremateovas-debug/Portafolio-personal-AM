import about from '../data/about.js'

function About() {



    const skills = [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
        { name: 'Rad Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/radstudio/radstudio-original.svg' },
        { name: 'Godot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
        { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        
    ]

    const projects = [
        { name: 'Good Bartender', description: 'Videojeugo de novela visual y simulacion para movil y pc sobre cocteleria desarrollado en Godot Engine', link: 'https://andremateov.sg-host.com/' },
        { name: 'SIGNAL', description: 'Prototipo de interprete a tiempo real de lenguaje señas', link: '' },
        { name: 'Mesa de Luna', description: 'Pagina web del restaurante Mesa de luna y sistema de reservas e inventario', link: 'https://mesadeluna.com' },
    ]


    const [currentskill, setCurrentSkill] = useState(0)
    const [currentProject, setCurrentProject] = useState(0)
            
  return (
    <section id="about">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre mí</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {about.description}
        </p>


            <div className="grid grid-cols-3 gap-6 mt-10">
                
            </div>
      </div>
    </section>
  )
}

export default About