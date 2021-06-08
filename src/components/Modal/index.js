import React from 'react'
import {createPortal} from 'react-dom'

import '../../assets/styles/modal.css'

const SuccessModal = ({isOpen, setOpen, children}) => {
  const modalContainer = document.getElementById('modal')
  const handleCloseModal = () => {
    setOpen(false)
  }

  return isOpen ?
  createPortal(
    <section className="modal-container">
      <div className="modal message">
        {children}
        <button className="btn close" onClick={handleCloseModal}>Cerrar</button>
      </div>
    </section>,
    modalContainer
  ) : null
}

export default SuccessModal