import React, {useState} from 'react'
import '../../assets/styles/header.css'
import icon from '../../assets/images/icon-menu.png'
import file from '../../assets/cv/cv-rodrigo-guerrero.pdf'
import Menu from '../Menu'
import Navbar from '../Navbar'

function Header(){
  const [isOpen, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(true)
  }

  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">

            <div className="logo-container">
              <img src={icon} alt="icon" onClick={handleModal} className="menu-icon"/>
              <span className="logo">Rodrigo Guerrero</span>
            </div>

            <Navbar isModal={false} />

            <button className="btn">
              <a href={file} download="curriculum-rodrigo-guerrero.pdf">Currículum</a>
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} setOpen={setOpen}/>
    </>
  )
}

export default Header