/**
 * 
 */
import './App.css'
import Background from './components/background/Background'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Projects from './components/projects/Projects'
import Team from './components/team/Team'

function App() {
  

  return (
    <>
      <header>
        <div className="logoContainer"><a href="#hero" className="logo">TOROX</a></div>
        <NavBar />
      </header>
      <Background />
      <Hero />
      <Projects />
      <Team />
      <Contact />

      <footer>
        <p>&copy; 2025 TOROX. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
