function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <h5 className="fw-bold">
          Michel Dayana Mendoza Molina
        </h5>

        <p className="mb-3">
          Gracias por visitar mi hoja de vida.
          ¡Seguimos aprendiendo y creciendo!
        </p>

        <div className="mb-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/_dayanita29/"
            className="text-white mx-2 text-decoration-none"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram fs-4"></i>
            <span className="ms-2">_dayanita29</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Dayana126-code/react-mdmendozamo-ll"
            className="text-white mx-2 text-decoration-none"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github fs-4"></i>
            <span className="ms-2">GitHub</span>
          </a>
        </div>

        <p className="mb-0">
          © 2026 - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
