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
          <h2>Contacto</h2>
          <ul>
            <li><a href="www.gmail.com"><img src={email} alt="" />Correo electrónico</a></li>
            <li><a href="www.instagram.com"><img src={instagram} alt="" />Instagram</a></li>
            <li><a href="www.twitter.com/"><img src={twitter} alt="" />Twitter</a></li>
          </ul>

          <span>Rodrigo Guerrero</span>
          <p>Hecho con <img src={heart} alt="heart" /> de Rodrigo</p>
          <p>Copyright 2021 - Todo los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer