import '../../assets/styles/me.css'
import github_icon from '../../assets/images/icon-github.png'
import figma_icon from '../../assets/images/icon-figma.png'
import react_icon from '../../assets/images/icon-react.png'

function Me(){
  return(
    <section className="me">
      <div className="container">
        <div className="me-content">
          <img src="" alt="i'm Rodrigo Guerrero" />
          <h1>¡Hola a todos! Soy Rodrigo Guerrero</h1>
          <p>Devloper que le encanta implementar diseños que inspiran y atraen a las personas</p>

          <div className="technologies">
            <article>
              <img src={github_icon} alt="Github" />
              <h2>Implementaciones de la más alta calidad.</h2>
            </article>

            <article>
              <img src={figma_icon} alt="Figma" />
              <h2>Diseños pixel perfect creados en la mejor herramienta de diseño.</h2>
            </article>

            <article>
              <img src={react_icon} alt="React" />
              <h2>React desde 0, sin dependencias y usando solo el lenguaje JavaScript.</h2>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Me