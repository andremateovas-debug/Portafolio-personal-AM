function PruebaDeSection() {
  return (
    <section className="p-10">
      {Array.from({ length: 100}, (_, i) => (
        <p key={i} className="mb-4 text-gray-600">
          Línea de relleno número {i + 1} — probando el scroll del Navbar.
        </p>
      ))}
    </section>
  )
}

export default PruebaDeSection