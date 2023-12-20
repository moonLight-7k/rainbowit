import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';



function App() {

  return (
    <div  className='md:w-[100vw]'>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Clients />
      <Pricing />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
