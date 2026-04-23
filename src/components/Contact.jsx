function Contact() {
  const info = [
    {
      label: 'Correo de contacto',
      value: 'andremateovas@gmail.com',
      href: 'mailto:andremateovas@gmail.com',
      icon: '',
    },
    {
      label: 'Mi perfil de GitHub',
      value: 'github.com/andremateovas-debug',
      href: 'https://github.com/andremateovas-debug',
      icon: '',
    },
    {
      label: 'Mi perfil de LinkedIn',
      value: 'linkedin.com/in/andremateovas',
      href: 'https://www.linkedin.com/in/andremateovas/',
      icon: '',
    },
    {
      label: 'Mi perfil de Instagram',
      value: '@matunjo__',
      href: 'https://www.instagram.com/matunjo__/',
      icon: '',
    },
    

  ]

  return (
    <section id="contact" className="min-h-screen bg-gray-950 text-white py-20 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold mb-2">Contacto</h2>
          <p className="text-gray-400 text-sm">
            ¿Tienes un proyecto o una oportunidad donde te interese que participe? 
            Contactame!
          </p>

          <p className="text-gray-400 text-sm">
            Aqui hay algunos perfiles comerciales mios e incluso
            un formulario para el envio de un correo automatico a mi bandeja principal !!
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {info.map((item) => (
                <a 
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-xl px-5 py-4"
                >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm text-gray-300">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>



        <div className="bg-white/5 rounded-2xl p-8 flex flex-col gap-5">
          <h3 className="text-lg font-semibold">Envíame un mensaje</h3>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase tracking-widest">Nombre completo </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 placeholder-gray-600 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase tracking-widest">Email</label>
            <input
              type="email"
              placeholder="tucorreo@tudominio.com"
              className="bg-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 placeholder-gray-600 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase tracking-widest">Mensaje</label>
            <textarea
              rows={5}
              placeholder="¿En qué puedo ayudarte?"
              className="bg-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 placeholder-gray-600 transition resize-none"
            />
          </div>

          <button
            className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 mt-2 cursor-pointer"
            
          >
            Enviar mensaje →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact