import './App.css'
import NavbarComponent from './Components/Navbar'
import HeroAria from './Components/HeroAria'
import Vision from './Components/Vision'
import Offer from './Components/Offer'
import DebitCard from './Components/DebitCard'
import PerfectCard from './Components/PerfectCard'
import Feedback from './Components/Feedback'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'



function App() {
  
  

  return (
    <>
    <main className="overflow-x-hidden">
    <NavbarComponent/>
    <div className="w-full max-w-[1440px ] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5">
    <HeroAria/>
    <Vision/>
    <Offer/>
    <DebitCard/>
    <PerfectCard/>
    <Feedback/>
    <FAQ/>
    </div>
    <Footer/>
    </main>
      
    </>
  )
}

export default App
