import heart from '../../assets/images/icon-heart_outline.png'
import email from '../../assets/images/icon-important_mail.png'
import instagram from '../../assets/images/icon-instagram.png'
import twitter from '../../assets/images/icon-twitter.png'

import '../../assets/styles/footer.css'

function Footer(){
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-container">
            <h2 className="title-section">Contacto</h2>
            <ul>
              <li><a href="http://www.gmail.com" target="_blank" rel="noreferrer"><img src={email} alt="Email icon" />Correo electrónico</a></li>
              <li><a href="www.instagram.com"><img src={instagram} alt="Instagram icon" />Instagram</a></li>
              <li><a href="www.twitter.com/"><img src={twitter} alt="Twitter icon" />Twitter</a></li>
            </ul>
          </div>

          <div className="logo-container">
            <span>Rodrigo Guerrero</span>
            <p>Hecho con <img src={heart} alt="heart" /> de Rodrigo</p>
            <p>Copyright 2021 - Todo los derechos reservados</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer