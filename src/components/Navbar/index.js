import '../../assets/styles/navbar.css'

const Navbar = ({isMenu, setOpen}) => {

  const handleCloseModal = () => {
    setOpen(false)
  }

  return isMenu ? (
    <nav className="menu navbar">
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