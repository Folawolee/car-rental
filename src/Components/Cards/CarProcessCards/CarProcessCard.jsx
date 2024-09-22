import './CarProcessCard.css'


const CarProcessCard = ({ title, content, description }) => {
  return (
    <div className='card-data'>
        <h1 className='card-data-title'>{title}</h1>
        <p className='card-data-content'>{content}</p>
        <p className='card-data-desc'>{description}</p>
    </div>
  )
}

export default CarProcessCard