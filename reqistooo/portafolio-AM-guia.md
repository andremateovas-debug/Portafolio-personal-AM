# Portafolio Personal — André Mateo Vásquez
## Guía de desarrollo completa

---

## Estructura de archivos

```
src/
  assets/
    images/
      fondohero.png
  components/
    Navbar.jsx       ✅ Listo
    Hero.jsx         ✅ Listo
    About.jsx        🔨 En progreso
    Skills.jsx       ⬜ Pendiente
    Projects.jsx     ⬜ Pendiente
    Contact.jsx      ⬜ Pendiente
  data/
    about.js         🔨 En progreso
    skills.js        ⬜ Pendiente
    projects.js      ⬜ Pendiente
  App.jsx
  main.jsx
  index.css
```

---

## Componentes

---

### ✅ Navbar.jsx — COMPLETADO

**Función:** Barra de navegación fija en la parte superior.

**Requerimientos:**
- `fixed` en la parte superior de la pantalla
- Efecto de vidrio: `backdrop-blur` + fondo semitransparente
- Logo "AM" a la izquierda
- Links de navegación a la derecha
- Scroll suave a cada sección al hacer click

**Estado:** Ninguno

**Props:** Ninguna

**Datos:** Array `links` dentro del componente
```js
const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]
```

**Conceptos usados:** `.map()`, `key`, clases de Tailwind

---

### ✅ Hero.jsx — COMPLETADO

**Función:** Primera sección visible. Presentación principal.

**Requerimientos:**
- Altura de pantalla completa (`min-h-screen`)
- Imagen de fondo (`fondohero.png`)
- Nombre completo
- Subtítulo con roles rotativos animados (fade in/out)
- Descripción corta
- Dos botones CTA: "Ver proyectos" y "Contacto"

**Estado:**
```js
const [currentRole, setCurrentRole] = useState(0)
// Controla qué rol del array se muestra

const [visible, setVisible] = useState(true)
// Controla la opacidad para el fade in/out
```

**Lógica del efecto fade:**
```
Cada 5000ms:
  1. setVisible(false)       → fade out (CSS transition)
  2. setTimeout 500ms  → setCurrentRole(siguiente)
  3. setTimeout 1500ms → setVisible(true) → fade in
```

**Animación en JSX:**
```jsx
style={{ opacity: visible ? 1 : 0 }}
className="... transition-opacity duration-700"
```

**Conceptos usados:** `useState`, `useEffect`, `setInterval`, `setTimeout`, `import` de imagen, `style` inline dinámico

---

### 🔨 About.jsx — EN PROGRESO

**Función:** Sección "Sobre mí" con descripción personal y estadísticas.

**Requerimientos:**
- `id="about"` en el `<section>` para que el link del Navbar funcione
- Título "Sobre mí"
- Párrafo con descripción desde `about.description`
- Grid de 3 cards con estadísticas desde `about.stats`

**Estructura JSX sugerida:**
```jsx
<section id="about">
  <div className="max-w-5xl mx-auto px-6 py-20">
    <h2>Sobre mí</h2>
    <p>{about.description}</p>
    <div className="grid grid-cols-3 gap-6 mt-10">
      {about.stats.map((stat) => (
        <div key={stat.label}>
          <p>{stat.value}</p>   // número grande
          <p>{stat.label}</p>   // etiqueta abajo
        </div>
      ))}
    </div>
  </div>
</section>
```

**Datos necesarios en `src/data/about.js`:**
```js
const about = {
  description: `Tu descripción aquí...`,
  stats: [
    { label: 'Proyectos', value: '4+' },
    { label: 'Lenguajes', value: '8' },
    { label: 'Años exp.', value: '2+' },
  ],
}
export default about
```

**Conceptos nuevos:** Importar datos desde archivo externo, separación de datos y presentación

---

### ⬜ Skills.jsx — PENDIENTE

**Función:** Mostrar habilidades técnicas agrupadas por categoría.

**Requerimientos:**
- `id="skills"` en el `<section>`
- Título "Skills"
- Grupos de chips por categoría: Frontend, Backend, Game Dev, Herramientas
- Cada chip muestra nombre del skill

**Estructura JSX sugerida:**
```jsx
<section id="skills">
  <div className="max-w-5xl mx-auto px-6 py-20">
    <h2>Skills</h2>
    {skills.map((category) => (
      <div key={category.name}>
        <p>{category.name}</p>   // nombre de categoría
        <div>
          {category.items.map((skill) => (
            <span key={skill}>{skill}</span>  // chip individual
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
```

**Datos necesarios en `src/data/skills.js`:**
```js
const skills = [
  {
    name: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind']
  },
  {
    name: 'Backend & DB',
    items: ['PHP', 'MySQL', 'Python']
  },
  {
    name: 'Game Dev',
    items: ['GDScript', 'Godot 4', 'C#', 'Unity']
  },
  {
    name: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Blender']
  },
]
export default skills
```

**Conceptos nuevos:** `.map()` anidado (categorías → items)

---

### ⬜ Projects.jsx — PENDIENTE

**Función:** Mostrar proyectos destacados en cards.

**Requerimientos:**
- `id="projects"` en el `<section>`
- Título "Proyectos"
- Grid de cards, una por proyecto
- Cada card muestra: nombre, descripción, stack (chips), link a GitHub o demo

**Estructura JSX sugerida:**
```jsx
<section id="projects">
  <div className="max-w-5xl mx-auto px-6 py-20">
    <h2>Proyectos</h2>
    <div className="grid grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div>
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <a href={project.link}>Ver proyecto</a>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Datos necesarios en `src/data/projects.js`:**
```js
const projects = [
  {
    name: 'Todolist React',
    description: 'App de tareas construida con React 19, Vite y Tailwind CSS.',
    stack: ['React', 'Tailwind', 'Vite'],
    link: 'https://github.com/andremateovas/Todolist_REACT',
    demo: ''
  },
  {
    name: 'Good Bartender',
    description: 'Videojuego de novela visual y simulación de coctelería. Disponible en itch.io.',
    stack: ['Godot 4', 'GDScript', 'Dialogic 2'],
    link: '',
    demo: 'https://andremateov.itch.io'
  },
  {
    name: 'Mesa de Luna',
    description: 'Sitio web bilingüe con sistema de reservas e inventario para restaurante.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    link: '',
    demo: 'https://mesadeluna.com'
  },
  {
    name: 'SIGNAL',
    description: 'Intérprete de lenguaje de señas en tiempo real. 1er lugar estatal DGETI.',
    stack: ['Python', 'C#', 'MediaPipe', 'scikit-learn'],
    link: '',
    demo: ''
  },
]
export default projects
```

**Conceptos nuevos:** `.map()` anidado, renderizado condicional para links vacíos (`{project.demo && <a>...}`)

---

### ⬜ Contact.jsx — PENDIENTE

**Función:** Sección de contacto con links y botón de CV.

**Requerimientos:**
- `id="contact"` en el `<section>`
- Título "Contacto"
- Email con link `mailto:`
- Link a GitHub
- Botón para descargar CV en PDF (el PDF debe estar en `/public/cv.pdf`)

**Estructura JSX sugerida:**
```jsx
<section id="contact">
  <div className="max-w-5xl mx-auto px-6 py-20">
    <h2>Contacto</h2>
    <p>Descripción corta</p>
    <div>
      <a href="mailto:andremateovas@gmail.com">andremateovas@gmail.com</a>
      <a href="https://github.com/andremateovas">GitHub</a>
      <a href="/cv.pdf" download>Descargar CV</a>
    </div>
  </div>
</section>
```

**Conceptos nuevos:** `mailto:`, atributo `download` en links, servir archivos estáticos desde `/public`

---

## App.jsx — ensamblado final

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
```

---

## Efecto de transición entre secciones (fase final)

**Objetivo:** Al hacer click en un link del Navbar o en los botones del Hero, el contenido actual hace fade + slide a la izquierda y el nuevo contenido entra desde la derecha.

**Arquitectura necesaria:**
- Cambiar de SPA con scroll a sistema de "vistas" manejado por estado
- Un `useState` en `App.jsx` que controla qué sección está activa
- Animación CSS con `transform: translateX` + `opacity`
- Pasar `setActiveSection` como prop a Navbar y Hero para que los botones funcionen

**Se implementa al final** cuando todos los componentes estén listos.

---

## Conceptos React aprendidos en este proyecto

| Concepto | Dónde se usa |
|---|---|
| `useState` | Hero (roles, visible), futuro About |
| `useEffect` + `setInterval` | Hero (rotación de roles) |
| `setTimeout` | Hero (timing del fade) |
| `.map()` con `key` | Navbar, About, Skills, Projects |
| `.map()` anidado | Skills, Projects |
| Import de imágenes | Hero |
| `style` inline dinámico | Hero (opacidad) |
| Separación datos/componente | About, Skills, Projects |
| Renderizado condicional `&&` | Projects (links vacíos) |
| Props | (fase final — transiciones) |
