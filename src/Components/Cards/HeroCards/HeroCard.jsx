import './HeroCard.css'


const HeroCard = ({title, content, icon }) => {
  return (
    <div className='card'>
        <p className='card-title'>{title}</p>
        <div className='card-inner-content'>
            <p className='card-content'>{content}</p>
            <img src={icon} alt="" />
        </div>
    </div>
  )
}

export default HeroCard