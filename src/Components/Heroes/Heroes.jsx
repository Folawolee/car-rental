import './Heroes.css'
import herobg from '../../assets/images/herobg.png'
import HeroCard from '../Cards/HeroCards/HeroCard'
import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/heroicon-2.png'
import icon3 from '../../assets/images/heroicon-3.png'


const Heroes = () => {

  const cardData = [
    {
      title:"Vehicle Type",
      content:"Select Car Group",
      icon:icon1
    },
    {
      title:"Picking Up Locations",
      content:"Airport Or Anywhere",
      icon: icon2,
    },
    {
      title:"Picking Up Date",
      content:"22/02/2024",
      icon:icon3,
    },
    {
      title:"Returning Date",
      content:"22/02/2024",
      icon:icon3,
    }
  ]



  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={herobg} alt="" />
        <div className="hero-text">
          <h1>FIND YOUR CAR & LIMOUSINE</h1>
          <p>We have many best rental car collections.</p>
          <div className='hero-card'>
          {cardData.map((card, index) => (<HeroCard key={index} title={card.title} content={card.content} icon={card.icon} />))}
          </div>
          <div className='car-finder'>
            <p>FIND YOUR CAR</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroes