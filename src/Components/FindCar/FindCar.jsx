import './FindCar.css'
import TypeCard from '../Cards/TypeCard/TypeCard'
import type1 from '../../assets/images/type1.png'
import type2 from '../../assets/images/type2.png'
import type3 from '../../assets/images/type3.png'
import type4 from '../../assets/images/type4.png'
import type5 from '../../assets/images/type5.png'
import type6 from '../../assets/images/type6.png'
import type7 from '../../assets/images/type7.png'
import type8 from '../../assets/images/type8.png'

const FindCar = () => {
    const cars = [
        {
            image:type1,
            name:"JEEP",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"

        },
        {
            image:type2,
            name:"MERCEDES",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        },
        {
            image:type3,
            name:"BMW X3",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        },
        {
            image:type4,
            name:"HYUNDAI",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        },
        {
            image:type5,
            name:"MERCEDES",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        },
        {
            image:type6,
            name:"FORD",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        },
        {
            image:type7,
            name:"FORD",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        },
        {
            image:type8,
            name:"BMW X3",
            price:"Starts From",
            time:"29$/Day",
            rent:"RENT NOW"
        }
    ]

  return (
    <div className='find-car'>
        <div className='find-car-content'>
            <h1>FIND BY TYPE</h1>
            <div className='car-type'>
                <div className='type-item type-all'>All</div>
                <div className='type-item type-coupe'>Coupe</div>
                <div className='type-item type-sedan'>Sedan</div>
                <div className='type-item type-suv'>SUV</div>
            </div>
            <div className='type-card'>
                {cars.map((card, index) => <TypeCard key={index} image={card.image} name={card.name} price={card.price} time={card.time} rent={card.rent}  />)}
            </div>
        </div>
    </div>
  )
}

export default FindCar