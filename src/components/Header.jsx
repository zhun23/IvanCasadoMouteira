
import profilePic from '../assets/fotoPerfil.jpg'

export default function Header() {
  return (
    <header className="text-center mt-5 mb-">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4">
            <img
                src={profilePic}
                alt="Iván Casado"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h1 className="mb-0">Iván Casado</h1>
        </div>

        <nav
            className="d-flex justify-content-center flex-wrap gap-3 nav-header"
            style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                border: '1px solid #ccc',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(75, 75, 75, 0.25)',
                width: '100%',
                borderRadius: '8px'
            }}
            >
            <a href="#about">Sobre mí</a>
            <a href="#experience">Experiencia</a>
            <a href="#education">Formación</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
        </nav>
    </header>
  )
}