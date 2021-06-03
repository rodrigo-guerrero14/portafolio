import React from 'react'
import {createPortal} from 'react-dom'
import '../../assets/styles/modal.css'
import Navbar from '../Navbar'

const Modal = ({isOpen, setOpen}) => {
  const modalContainer = document.getElementById('menu')

  return isOpen ? createPortal(
    <section className="modal-container">
      <div className="modal">
        <span>Rodrigo Guerrero</span>
        <Navbar isModal={true} setOpen={setOpen}/>
      </div>
    </section>,
    modalContainer) : null
}

export default Modal