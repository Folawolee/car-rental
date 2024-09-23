import './Support.css'
import caricon from '../../assets/images/caricon.png'
import bookingicon from '../../assets/images/bookmarkicon.png'
import moneyicon from '../../assets/images/moneyicon.png'
import messageicon from '../../assets/images/messageicon.png'

const SupportCard = ({ icon, topic, content}) => {
    return (
      <div className='support-card-content'>
        <div className="support-card">
            <img src={icon} alt="" />
            <p className='support-card-topic'>{topic}</p>
            <p className='support-card-content'>{content}</p>
        </div>
      </div>
    )
  }

const Support = () => {
    const SupportData = [
        {
            icon:caricon,
            topic:"DIFFERENT CARS",
            content:"Sed euismod mauris corper libero."
        },
        {
            icon:bookingicon,
            topic:"EASY BOOKING",
            content:"Nisi maecenas fermentum neque."
        },
        {
            icon:moneyicon,
            topic:"100% BEST RATE",
            content:"Mauris corper accumsan urna sed."
        },
        {
            icon:messageicon,
            topic:"CUSTOMER SUPPORT",
            content:"Orci duis ut lectus metus nam sette."
        },
    ]

  return (
    <div className='support'>
        <div className='support-area'>
            {SupportData.map((item, index) => <SupportCard key={index} icon={item.icon} topic={item.topic} content={item.content} />)}
        </div>
    </div>
  )
}

export default Support