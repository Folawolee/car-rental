import './Navbar.css'
import carlogo from '../../assets/images/car-logo.png' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <img src={carlogo} alt="" />
        <h1>LIMO</h1>
      </div>
      <div className="nav-right">
        <ul className='nav-list'>
          <li className='nav-item nav-item-link'><a href="#">Home</a></li>
          <li className='nav-item'>Booking</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Cars</li>
          <li className='nav-item'>Blog</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar