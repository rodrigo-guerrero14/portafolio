import React from 'react'
import {createPortal} from 'react-dom'
import '../../assets/styles/modal.css'
import Navbar from '../Navbar'

const Menu = ({isOpen, setOpen}) => {
  const modalContainer = document.getElementById('modal')

  return isOpen ? createPortal(
    <section className="modal-container" onClick={() => setOpen(false)}>
      <div className="menu">
        <span className="logo">Rodrigo Guerrero</span>
        <Navbar isMenu={true} setOpen={setOpen}/>
      </div>
    </section>,
    modalContainer) : null
}

export default Menu