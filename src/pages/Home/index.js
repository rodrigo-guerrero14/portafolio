import '../../assets/styles/home.css'

import Header from '../../components/Header'
import Me from '../../components/Me'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Home(){
  return(
    <>
      <Header />
      <Me />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home