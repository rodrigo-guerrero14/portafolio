import '../../assets/styles/projects.css'
import project_1 from '../../assets/images/project_pabloLee.jpg'
import project_2 from '../../assets/images/project_sector.jpg'
import project_3 from '../../assets/images/react_project.png'

function Projects(){

  return(
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-content">
          <h2 className="title-section">Proyectos</h2>

          <div className="buttons">
            <a href="#project-1">
              <button className="btn">Pablo lee</button>
            </a>

            <a href="#project-2">
              <button className="btn">Sector</button>
            </a>

            <a href="#project-3">
              <button className="btn">Proyecto en React</button>
            </a>
          </div>

          <article id="project-1" className="project">
            <picture>
              <img src={project_1} alt="pablo lee´s project" />
            </picture>

            <div className="description">
              <h4>Pablo lee</h4>
              <p>Landing page con diseño responsivo, se ha desarrollado Mobile first, para facilitar su uso en dispositivos pequeños. En donde cabe mencionar que este proyecto se ha desarrollado con tecnologias Vanilla.</p>
              <div className="buttons">
                <a href="https://github.com/rodrigo-guerrero14/pablo-lee" target="_blank" rel="noreferrer">
                  <button className="btn">Ver código</button>
                </a>
                <a href="https://rodrigo-guerrero14.github.io/pablo-lee/" target="_blank" rel="noreferrer">
                  <button className="btn">Ver proyecto</button>
                </a>
              </div>
            </div>
          </article>

          <article id="project-2" className="project">
            <picture>
              <img src={project_2} alt="sector´s project" />
            </picture>

            <div className="description">
              <h4>Sector</h4>
              <p>Se ha desarrollado una landing page con el fin de demostrar el conocimiento en tecnologias como HTML, maquetación y CSS, además se ha implementado diseño responsivo, generando diferentes breakpoints para que la aplicacion web se adapte a todo tipo de pantallas.</p>
              <div className="buttons">
                <a href="https://github.com/rodrigo-guerrero14/sector" target="_blank" rel="noreferrer">
                  <button className="btn">Ver código</button>
                </a>

                <a href="https://rodrigo-guerrero14.github.io/sector/" target="_blank" rel="noreferrer">
                  <button className="btn">Ver proyecto</button>
                </a>
              </div>

            </div>
          </article>

          <article id="project-3" className="project">
            <picture>
              <img src={project_3} alt="react project" />
            </picture>

            <div className="description">
              <h4>Proyecto en React: lista de comentarios</h4>
              <p>Proyecto desarrollado en react, en donde se ha usado el hook useState para agregar una lista de comentarios, los cuales se renderizan de forma automatica, asi mismo se pueden eliminar estos elementos del DOM.</p>

              <div className="buttons">

                <a href="https://github.com/rodrigo-guerrero14/react-states" target="_blank" rel="noreferrer">
                  <button className="btn">Ver código</button>
                </a>

                  <a href="https://rodrigo-guerrero14.github.io/react-states/" target="_blank" rel="noreferrer">
                    <button className="btn">Ver proyecto</button>
                  </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects