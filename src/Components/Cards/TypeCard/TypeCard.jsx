import './TypeCard.css'



const TypeCard = ({image, name, price, time, rent}) => {
  return (
    <div className='typecard'>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <div className='type-price'>
            <p className='type-card-price'>{price}</p>
            <p className='type-card-time'>{time}</p>
        </div>
        <p className='type-card-rent'>{rent}</p>
    </div>
  )
}

export default TypeCard