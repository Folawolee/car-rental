import './Footer.css'
import logo from '../../assets/images/car-logo.png'
import facebook from '../../assets/images/facebook-icon.png'
import twitter from '../../assets/images/twitter-icon.png'
import instagram from '../../assets/images/ig-icon.png'
import linkedin from '../../assets/images/linkedin-icon.png'
import youtube from '../../assets/images/youtube-icon.png'
import map from '../../assets/images/map-icon.png'
import call from '../../assets/images/call-icon.png'
import time from '../../assets/images/time-icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-upper-section">
            <div className="logo-section">
                <div className='logo'><img src={logo} alt="" />LIMO</div>
                <p>Vel non nibh vestibulum massa ullam corper bib endum ultrices venenatis, id id sed mass.</p>
                <div className="social-logo">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
            <div className="contact-area">
                <h2>CONTACT INFO</h2>
                <div className="contact-info-areaset">
                    <div className="contact-location"><img src={map} alt="" /> State Road 54 Trinity, Florida</div>
                    <div className="contact-phone-number"><img src={call} alt="" /> Call: 666 333 9999</div>
                    <div className="contact-time"><img src={time} alt="" /> 8:00-18:00, Sat: Closed</div>
                </div>
            </div>
            <div className="news">
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className='newsletter'>Vel non nibh vestibulum massa ullam corper bib endum ultrices venenatis, id id sed mass.</p>
                <div className='sub'><p className='email-sub'>Your email address</p><p className='sub-sub'>SUBSCRIBE</p></div>
            </div>
        </div>

        <div className='underline' />

        <div className="footer-lower-section">
            <div className="lower-left">
            © Limo,  All rights reserved -  Template design by <a href="#">TemplatesJungle</a>
            </div>
            <div className="lower-right">
                <ul className='lower-right-list'>
                    <li className='lower-right-item'>Home</li>
                    <li className='lower-right-item'>Booking</li>
                    <li className='lower-right-item'>About</li>
                    <li className='lower-right-item'>Cars</li>
                    <li className='lower-right-item'>Blog</li>
                    <li className='lower-right-item'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer