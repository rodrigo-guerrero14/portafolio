import '../../assets/styles/contact.css'
import { useState } from 'react'
import {send} from 'emailjs-com'


function Contact(){
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleSendMessage = (e) => {
    e.preventDefault()
    send(
      'service_77npz7e',
      'template_wun26hk',
      toSend,
      'user_YSoO0AJM3IqpzdDuOBdyx'
    )
      .then(response => {
        console.log('Success!', response.status, response.text);
        setToSend({
          from_name: '',
          from_email: '',
          message: ''
        })
      })
      .catch(err => {
        console.error('Failed ...', err)
      })
  }

  const handleChange = (e) => {
    const {target} = e
    setToSend({...toSend, [target.name]: target.value})
  }

  return(
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="title-section">Contact</h2>
          <p> Si está interesado en travajar conmigo en su próximo proyecto, no dude en ponerse en contacto</p>
          <form action="" className="form" onSubmit={handleSendMessage}>
            <input type="text" placeholder="Nombre completo" name="from_name" value={toSend.from_name} onChange={handleChange}/>
            <input type="text" placeholder="Correo electrónico" name="from_email" value={toSend.from_email} onChange={handleChange}/>
            <textarea cols="30" rows="10" placeholder="Mensaje" name="message" value={toSend.message} onChange={handleChange}></textarea>
            <button className="btn" type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact