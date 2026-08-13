import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import EditorialCTA from './components/EditorialCTA'
import Manifesto from './components/Manifesto'
import Benefits from './components/Benefits'
import VisualFeature from './components/VisualFeature'
import PhoneFinder from './components/PhoneFinder'
import ProductShowcase from './components/ProductShowcase'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import MobileWhatsApp from './components/MobileWhatsApp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <EditorialCTA />
        <Manifesto />
        <Benefits />
        <VisualFeature />
        <PhoneFinder />
        <ProductShowcase />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileWhatsApp />
    </>
  )
}

export default App
