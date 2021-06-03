import '../../assets/styles/contact.css'

const handleSendMessage = (e) => {
  e.preventDefault()
}

function Contact(){
  return(
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="title-section">Contact</h2>
          <p> Si está interesado en travajar conmigo en su próximo proyecto, no dude en ponerse en contacto</p>
          <form action="" className="form">
            <input type="text" placeholder="Nombre completo"/>
            <input type="text" placeholder="Correo electrónico"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <button className="btn" onClick={handleSendMessage}>Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact