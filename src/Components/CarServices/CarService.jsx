import './CarServices.css'
import service1 from '../../assets/images/service1.png'
import services2 from '../../assets/images/services2.png'
import services3 from '../../assets/images/services3.png'
import services4 from '../../assets/images/services4.png'
import services5 from '../../assets/images/services5.png'
import services6 from '../../assets/images/services6.png'

const CarService = () => {
  return (
    <div className='car-service'>
        <h1>GREAT CARS RENTAL & LIMOUSINE SERVICES</h1>
        <div className='service-content'>
            <div className='service-content1'>
                <img src={service1} alt="" />
                <p>HYUNDAI</p>
            </div>
            <div className='service-content2'>
                <img src={services2} alt="" />
                <p>HYUNDAI</p>
            </div>
            <div className='service-content3'>
                <img src={services3} alt="" />
                <p>HYUNDAI</p>
            </div>
            <div className='service-content4'>
                <img src={services4} alt="" />
                <p>HYUNDAI</p>
            </div>
            <div className='service-content5'>
                <img src={services5} alt="" />
                <p>HYUNDAI</p>
            </div>
            <div className='service-content6'>
                <img src={services6} alt="" />
                <p>HYUNDAI</p>
            </div>
        </div>
    </div>
  )
}

export default CarService