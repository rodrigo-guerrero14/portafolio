import '../../assets/styles/header.css'
import icon from '../../assets/images/icon-menu.png'

import file from '../../assets/cv/cv-rodrigo-guerrero.pdf'

function Header(){
  return(
    <header className="header">
      <div className="container">
        <div className="header-content">

          <div className="logo-container">
            <img src={icon} alt="icon" />
            <span className="logo">Rodrigo Guerrero</span>
          </div>

          <nav>
            <ul>
              <span className="logo">Rodrigo Guerrero</span>
              <li>Sobre mi</li>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </nav>

          <button className="btn">
            <a href={file} download="curriculum-rodrigo-guerrero.pdf">Currículum</a>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header