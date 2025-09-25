import Footer from "./components/Footer/Footer"
import Navbar from "./components/NavBar/NavBar"
import Hero from "./pages/Home/sections/Hero/Hero"
import About from"./pages/Home/sections/About/About"
import Projects from "./pages/Home/sections/Projects/Projects"


const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Footer />
      
    </>
  )
}

export default App