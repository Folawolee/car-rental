import PriceCard from '../Cards/PriceCard/PriceCard'
import './PricePlan.css'

const PricePlan = () => {
    const plancard = [
        {
            title:"ESSENTIAL",
            price:"$29.50",
            features:["✓ Quisque rhoncus", "✓ Lorem ipsum dolor", "✓ Vivamus velit mir", "✓ Velit mir", "✓ Elit mir ivamus"],
            button:"CHOOSE PLAN"
        },
        {
            title:"RECOMMENDED",
            price:"$44.40",
            features:["✓ Quisque rhoncus", "✓ Lorem ipsum dolor", "✓ Vivamus velit mir", "✓ Elit mir ivamus", "✓ Lorem ipsum dolor", "✓ Ipsum dolor"],
            button:"CHOOSE PLAN"
        },
        {
            title:"PRO",
            price:"70.50",
            features:["✓ Quisque rhoncus", "✓ Lorem ipsum dolor", "✓ Elit mir ivamus", "✓ Lorem ipsum dolor", "✓ Ipsum dolor","✓ Quisque rhoncus", "✓ lit mir iamus"],
            button:"CHOOSE PLAN"
        },
    ]
  return (
    <div className='price-plan'>
        <div className='price-content'>
            <h2>SAVE BY CHOOSING BEST PLAN</h2>
            <div className='timely'>
                <div className='monthly'>Monthly</div>
                <div className='oval'>
                    <div className='circle'></div>
                </div>
                <div className='monthly'>Annually</div>
            </div>
            <div className="price-card">
                {plancard.map((card, index) => <PriceCard key={index} title={card.title} price={card.price} features={card.features} button={card.button} />)}
            </div>
        </div>
    </div>
  )
}

export default PricePlan