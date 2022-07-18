import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import SliderT from './components/SliderT/SliderT'
import Slider from './components/Slider/Slider'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import 'react-icons'
import 'react-reveal'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
         <SliderT />
        <Slider />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
