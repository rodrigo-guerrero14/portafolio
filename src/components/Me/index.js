import '../../assets/styles/me.css'
import github_icon from '../../assets/images/icon-github.png'
import figma_icon from '../../assets/images/icon-figma.png'
import react_icon from '../../assets/images/icon-react.png'
import photo  from '../../assets/images/me-mobile.png'
import photo_desktop from '../../assets/images/me-desktop.png'

function Me(){
  return(
    <section className="me" id="me">
      <div className="container">
        <div className="me-content">

          <picture className="photo-container">
            <source media="(min-width: 800px)" srcSet={photo_desktop} />
            <img src={photo} alt="i'm Rodrigo" className="me-photo"/>
          </picture>

          <h1 className="title-section">¡Hola a todos! Soy Rodrigo Guerrero</h1>
          <p>Soy un web developer y mi objetivo es buscar, colaborar y aprender aún más sobre el mundo web, durante un tiempo me estuve perfeccionando, estudiando las bases del desarrollo web, tengo la certeza que puedo aportar a un buen ambiente laboral y a apoyar en el desarrollo de software.</p>

          <div className="technologies">
            <article>
              <img src={github_icon} alt="Github" />
              <h3>Implementaciones de la más alta calidad.</h3>
            </article>

            <article>
              <img src={figma_icon} alt="Figma" />
              <h3>Diseños pixel perfect creados en la mejor herramienta de diseño.</h3>
            </article>

            <article>
              <img src={react_icon} alt="React" />
              <h3>React desde 0, sin dependencias y usando solo el lenguaje JavaScript.</h3>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Me