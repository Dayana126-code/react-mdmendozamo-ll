
function Formacion() {
  return (
    <section id="formacion" className="container py-5">
      <h2 className="text-center fw-bold mb-4">
        Formación académica
      </h2>

      <div className="row g-4">

        {/* Educación primaria */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">
                Educación primaria
              </h5>

              <p className="card-text">
                Institución: Escuela Urbana Mixta
              </p>

              <p className="mb-2">
                Inicio: 2012
              </p>

              <p className="mb-2">
                Finalización: 2017
              </p>

              <span className="badge bg-success">
                Finalizada
              </span>
            </div>
          </div>
        </div>

        {/* Educación secundaria */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">
                Educación secundaria
              </h5>

              <p className="card-text">
                Institución: Colegio Jorge Eliecer Gaitán
              </p>

              <p className="mb-2">
                Inicio: 2018
              </p>

              <p className="mb-2">
                Finalización: 2023
              </p>

              <span className="badge bg-success">
                Finalizada
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Formacion