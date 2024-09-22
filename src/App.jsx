
import './App.css'
import CarProcess from './Components/CarProcess/CarProcess'
import CarService from './Components/CarServices/CarService'
import Heroes from './Components/Heroes/Heroes'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Heroes />
      <CarProcess />
      <CarService />
    </div>
  )
}

export default App
