function Habilidades() {
  return (
    <section id="habilidades" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Mis habilidades
        </h2>

        <div className="row g-5">
          <div className="col-md-6">
            <h4 className="text-primary mb-4">
              Habilidades técnicas
            </h4>

            <p>HTML y CSS</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-primary"
                style={{ width: "70%" }}>
                70%
              </div>
            </div>

            <p>JavaScript</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-primary"
                style={{ width: "50%" }}>
                50%
              </div>
            </div>

            <p>React</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-primary"
                style={{ width: "45%" }}>
                45%
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="text-primary mb-4">
              Habilidades personales
            </h4>

            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-success p-2">Responsabilidad</span>
              <span className="badge bg-success p-2">Creatividad</span>
              <span className="badge bg-success p-2">Comunicación</span>
              <span className="badge bg-success p-2">Trabajo en equipo</span>
              <span className="badge bg-success p-2">Organización</span>
              <span className="badge bg-success p-2">Adaptabilidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades