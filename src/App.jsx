
import './App.css'
import Blog from './Components/Blogs/Blog'
import CarProcess from './Components/CarProcess/CarProcess'
import CarService from './Components/CarServices/CarService'
import ContanctInfo from './Components/ContactInfo/ContanctInfo'
import FindCar from './Components/FindCar/FindCar'
import Footer from './Components/Footer/Footer'
import Heroes from './Components/Heroes/Heroes'
import Navbar from './Components/Navbar/Navbar'
import PricePlan from './Components/PricePlan/PricePlan'
import Support from './Components/Support/Support'

function App() {

  return (
    <div>
      <Navbar />
      <Heroes />
      <CarProcess />
      <CarService />
      <FindCar />
      <ContanctInfo />
      <PricePlan />
      <Blog />
      <Support />
      <Footer />
    </div>
  )
}

export default App
