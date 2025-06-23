
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p><i className="fas fa-envelope me-2"></i>Email: ivanc.bcn@gmail.com</p>
      <p>
          <i className="fab fa-linkedin me-2"></i>
          LinkedIn: <a href="https://www.linkedin.com/in/iván-casado-mouteira-28827a277" target="_blank" rel="noopener noreferrer">
          IvanCasado
          </a>
      </p>
      <p>
          <i className="fab fa-github me-2"></i>
          GitHub: <a href="https://github.com/zhun23" target="_blank" rel="noopener noreferrer">
          zhun23
      </a>
      </p>
      <a
        href={`${import.meta.env.BASE_URL}CV_Ivan_Casado.pdf`}
        download="CV_Ivan_Casado.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >Descargar currículum en PDF
      </a>
    </section>
  )
}