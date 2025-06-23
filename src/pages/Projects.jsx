
import movifilms from '../assets/moviefilms1.0.png'
import movifilms2 from '../assets/moviefilms2.0.png'

export default function Projects() {
  return (
    <section id="projects">
        <h2>Proyectos</h2>
        <ul>
            
        <li>
          <strong>Portfolio personal Tienda online de películas v2.0</strong> – Spring + React + MySQL + OpenAPI + Docker<br />
          - Proyecto web en desarrollo y despleguado en producción simulando una tienda online<br />
          - Consta de 2 repositorios, backend y frontend pero <strong>solo están disponibles bajo solicitud</strong>
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-2 mb-3">
            <img
                src={movifilms2}
                alt="Logo MovieFilms2.0"
                style={{
                width: '250px',
                height: 'auto',
                objectFit: 'contain',
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '10%'
            }}
            />
            <div>
              <a
                href="https://www.teirak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block mb-1 ps-2"
              >
                www.teirak.com
              </a>
              <a
                href="https://www.teirak.com/backend/swagger-ui/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block ps-2"
              >
                Swagger de www.teirak.com
              </a>
            </div>
            </div>
        </li>
        <li>
            <strong>Tienda online de películas</strong> – Spring + Thymeleaf + JS + MySQL
            <br />
            - Proyecto final de CFGS AppWeb tienda de películas con autenticación con gestión de catálogo y usuarios
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-2 mb-3">
                <img
                    src={movifilms}
                    alt="Logo MovieFilms1.0"
                    style={{ width: '180px', height: '150px', objectFit: 'cover', marginLeft: '10%' }}
                />
                <a
                href="https://github.com/zhun23/MovieFilms"
                target="_blank"
                rel="noopener noreferrer"
                className="ps-2"
                >
                Ver proyecto en GitHub
                </a>
            </div>
        </li>
      </ul>
    </section>
  )
}