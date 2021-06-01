import '../../assets/styles/me.css'
import github_icon from '../../assets/images/icon-github.png'
import figma_icon from '../../assets/images/icon-figma.png'
import react_icon from '../../assets/images/icon-react.png'
import photo  from '../../assets/images/person.png'

function Me(){
  return(
    <section className="me">
      <div className="container">
        <div className="me-content">

          <picture className="photo-container">
            <img src={photo} alt="i'm Rodrigo" className="me-photo"/>
            {/* otra foto con un tamaño distinto*/}
          </picture>

          <h1 className="title-section">¡Hola a todos! Soy Rodrigo Guerrero</h1>
          <p>Devloper que le encanta implementar diseños que inspiran y atraen a las personas</p>

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