import heart from '../../assets/images/icon-heart_outline.png'
import email from '../../assets/images/icon-important_mail.png'
import twitter from '../../assets/images/icon-twitter.png'
import phone from '../../assets/images/icon-phone.png'

import '../../assets/styles/footer.css'

function Footer(){
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-container">

            <h2 className="title-section">Contacto</h2>
            <ul>
              <li><a href="https://api.whatsapp.com/send?phone=+56942824926" target="_blank" rel="noreferrer"><img src={phone} alt="Phone icon" />Teléfono</a></li>
              <li><a href="mailto:guerrero.rodrigo14@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt="Email icon" />Correo electrónico</a></li>
              <li><a href="https://twitter.com/Elrodra14" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter icon" />Twitter</a></li>
            </ul>
          </div>

          <div className="logo-container">
            <span className="logo">Rodrigo Guerrero</span>
            <p>Hecho con <img src={heart} alt="heart" /> de Rodrigo. Copyright 2021 - Todo los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer