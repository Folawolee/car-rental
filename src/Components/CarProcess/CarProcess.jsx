import './CarProcess.css'
import CarProcessCard from '../Cards/CarProcessCards/CarProcessCard'



const CarProcess = () => {


    const CardData = [
        {
            title:"01",
            content:"CHOOSE A VEHICLE",
            description:"Lorem ispom is a dummy text."
        },
        {
            title:"02",
            content:"PICK LOCATION AND DATE",
            description:"Lorem ispom is a dummy text."
        },
        {
            title:"03",
            content:"BOOK YOUR CAR",
            description:"Lorem ispom is a dummy text."
        },
        {
            title:"04",
            content:"FINISH PROCESS",
            description:"Lorem ispom is a dummy text."
        },
    ]
    return (
    <div className='process-card'>
        {CardData.map((card, index) => <CarProcessCard  key={index} title={card.title} content={card.content} description={card.description} />)}
    </div>
  )
}

export default CarProcess