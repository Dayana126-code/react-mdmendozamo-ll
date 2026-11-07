


function Perfil() {
  return (
    <section id="perfil" className="container py-5">
      <div className="row align-items-center justify-content-center">

        <div className="col-md-4 text-center mb-4">
          <img
  src="/foto .jpeg"
  alt="Fotografía de perfil"
  className="img-fluid rounded-circle shadow"
  style={{
    width: "220px",
    height: "220px",
    objectFit: "cover",
    objectPosition: "center"
  }}
/>
        </div>

        <div className="col-md-7">
          <h1 className="fw-bold">
            Michel Dayana Mendoza Molina
          </h1>

          <h4 className="text-primary">
            Estudiante de Sistemas
          </h4>

          <p className="text-secondary">
            Soy una persona responsable, dedicada y comprometida
            con mi formación académica. Me interesa aprender sobre
            tecnología, informática y desarrollo web.
          </p>

          <p>
            <i className="bi bi-mortarboard-fill"></i>
            Colegio Jorge Eliecer Gaitán
          </p>

          <p>
            <i className="bi bi-envelope-fill"></i>
            {' '}mdmendozamo@ufpso.edu.co
          </p>

          <a href="#sobre-mi" className="btn btn-primary">
            Conocer más sobre mí
          </a>
        </div>

      </div>
    </section>
  )
}

export default Perfil