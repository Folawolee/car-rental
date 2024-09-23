import './PriceCard.css'


const PriceCard = ({title, price, features, button}) => {
  return (
    <div className='price-card'>
        <div className='box'>
            <h1 className='price-title'>{title}</h1>
            <p className='card-price'>{price}</p>
            <ul className="features-list">
                {features.map((feature, index) => (
                <li className='feature-item' key={index}>{feature}</li>
                ))}
            </ul>
            <div>{button}</div>

        </div>
    </div>
  )
}

export default PriceCard