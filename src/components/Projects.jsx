function Projects() { 



    
    return (
<body>
    00

        <section id="projects" className="min-h-screen p-10 text-black py-20 px-6">
            <p className=" border p-2 m-1  ">Seccion de proyectos</p>



            <div className=" flex items-start text-center border rounded-full flex  p-5 m-10 ">
            <h1 className="gap-1">Proyectos</h1>
                <div>
                    <p className="gap-2 ext-blue">Este es un breve contexto de mis proyectos ya desplegados</p>
                </div> 
            </div>



            ayuda se me olvido como diseñar desde className xdxdxd


            lol a ver hare un if que enere 50 de estos omaigas
            
        {Array.from({ length: 25}, (_, i) => (
        <p key={i} className="mb-4 text-gray-600">
          Línea de relleno número {i + 1} — probando el scroll
        </p>
      ))}


        </section>
        

        <section id="projects" className="min-h-screen p-10 text-black py-20 px-6">
            <p className=" border p-2 m-1  ">Seccion de proyectos</p>



            <div className=" flex items-start text-center border rounded-full flex  p-5 m-10 ">
            <h1 className="gap-1">Proyectos</h1>
                <div>
                    <p className="gap-2 ext-blue">Este es un breve contexto de mis proyectos ya desplegados</p>
                </div> 
            </div>



            


            
            
        {Array.from({ length: 100}, (_, i) => (
        <p key={i} className="mb-4 text-gray-600">
          Línea de relleno número {i + 1} — probando el scroll
        </p>
      ))}


        </section>



</body>
    )
}





export default Projects