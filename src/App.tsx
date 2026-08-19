import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import GlobalExperience from './components/GlobalExperience'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Navbar from './components/Navbar'
import Qualification from './components/Qualification'
import Skills from './components/Skills'
import Training from './components/Training'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Industries />
        <Achievements />
        <Training />
        <Skills />
        <Qualification />
        <GlobalExperience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App