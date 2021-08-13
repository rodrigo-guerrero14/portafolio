import '../../assets/styles/contact.css'
import { useState } from 'react'
import {send} from 'emailjs-com'
import Modal from '../Modal'


function Contact(){
  const [isOpen, setIsOpen]= useState(false)
  const [isFailure, setIsFailure] = useState(false)
  const [error, setError] = useState('')
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const validate = () => {
    if(toSend.from_name === ''){
      setError('El nombre no ha sido ingresado !')
      setIsFailure(true)
      return false
    }

    if(toSend.from_email === ''){
      setError('El email no ha sido ingresado !')
      setIsFailure(true)
      return false
    }

    if(toSend.message === ''){
      setError('El mensaje no ha sido ingresado !')
      setIsFailure(true)
      return false
    }

    return true
  }


  const handleSendMessage = (e) => {
    e.preventDefault()
    if(validate() === true){
      send(
        'service_77npz7e',
        'template_wun26hk',
        toSend,
        'user_YSoO0AJM3IqpzdDuOBdyx'
      )
        .then(response => {
          console.log('Success!', response.status, response.text);
          setIsOpen(true)
          setToSend({
            from_name: '',
            from_email: '',
            message: ''
          })
        })
        .catch(err => {
          console.error('Failed ...', err)
          setError(err)
          setIsFailure(true)
        })
    }
  }

  const handleChange = (e) => {
    const {target} = e
    setToSend({...toSend, [target.name]: target.value})
  }

  return(
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="title-section">Contact</h2>
            <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto</p>
            <form action="" className="form" onSubmit={handleSendMessage}>
              <input type="text" placeholder="Nombre completo" name="from_name" value={toSend.from_name} onChange={handleChange}/>
              <input type="email" placeholder="Correo electrónico" name="from_email" value={toSend.from_email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              <textarea cols="30" rows="10" placeholder="Mensaje" name="message" value={toSend.message} onChange={handleChange}></textarea>
              <button className="btn" type="submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} setOpen={setIsOpen}>
        <p>Felicidades 🎉🎉!! tu mensaje ha sido enviado correctamente, muchas gracias por comunicarte conmigo responderé a la brevedad</p>
      </Modal>

      <Modal isOpen={isFailure} setOpen={setIsFailure}>
        <p>{error}</p>
        <p>👩‍💻 por favor revisa los campos y trata nuevamente.</p>
      </Modal>
    </>
  )
}

export default Contact