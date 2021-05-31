import '../../assets/styles/header.css'
import icon from '../../assets/images/icon-menu.png'

function Header(){
  return(
    <header className="header">
      <div className="container">
        <div className="header-content">

          <div className="">
            <img src={icon} alt="icon" />
            <span className="logo">Rodrigo Guerrero</span>
            <button className="btn">Currículum</button>
          </div>

          <nav>
            <ul>
              <span className="logo">Rodrigo Guerrero</span>
              <li>Sobre mi</li>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header