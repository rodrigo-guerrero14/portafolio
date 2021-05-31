import '../../Styles/Home.css'

import Header from '../../components/Header'
import Me from '../../components/Me'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Home(){
  return(
    <section className="container">
      <Header />
      <Me />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}

export default Home