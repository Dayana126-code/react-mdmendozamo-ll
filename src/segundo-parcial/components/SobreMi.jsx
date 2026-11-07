function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Sobre mí</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="text-primary">Descripción personal</h4>
                <p>
                  Soy una persona responsable, respetuosa y dedicada.
                  Me gusta aprender cosas nuevas, trabajar en equipo
                  y enfrentar nuevos retos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="text-primary">Objetivos laborales</h4>
                <p>
                  Mi objetivo es adquirir experiencia, fortalecer mis
                  conocimientos y desarrollar habilidades que me
                  permitan crecer personal y profesionalmente.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="text-primary">Intereses</h4>
                <p>
                  Me interesa la tecnología, la informática,
                  el diseño web y el aprendizaje de nuevas herramientas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="text-primary">Fortalezas</h4>
                <p>
                  Responsabilidad, comunicación, creatividad,
                  compromiso, organización y trabajo en equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi