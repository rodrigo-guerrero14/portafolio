import '../../assets/styles/navbar.css'

const Navbar = ({isModal, setOpen}) => {

  const handleCloseModal = () => {
    setOpen(false)
  }

  return isModal ? (
    <nav className="modal navbar">
      <ul onClick={handleCloseModal}>
        <li><a href="#me">Hola</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  ) :
    <nav className="desktop navbar">
      <ul>
        <li><a href="#me">Hola</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
}

export default Navbar