import './ContactInfo.css'
import contactbg from '../../assets/images/contactbg.png'

const ContanctInfo = () => {
  return (
    <div className='contact-info'>
        <div className='contact-info-content'>
            <img src={contactbg} alt="" />
            <div className='contact-text'>
                <h1>CONTACT INFO</h1>
                <p className='text'>Nisi maecenas fermentum neque isi maecenas fermentum nequeaecenas fermentum neque isi maecenas fermentum neque aecenas fermentum neque isi maecenas fermentum neque.</p>
                <p className='number'>Call us (+234) 912 101 9131</p>
                <div className='contact'>
                    CONTACT US
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContanctInfo