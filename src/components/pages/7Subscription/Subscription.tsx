import s from './Subscription.module.css'
import starter from '../../../images/page7/starter.png'
import pro from '../../../images/page7/pro.png'
import max from '../../../images/page7/max.png'
import teams from '../../../images/page7/teams.png'
import { useState } from 'react'

const Subscription = () => {
    const [activeButton, setActiveButton] = useState<'yearly' | 'monthly'>('yearly')

    const handlePriceSelectionChange = (e: any) => {
        if (e.target.dataset.name === 'monthly') {
            setActiveButton('monthly')
        }
        if (e.target.dataset.name === 'yearly') {
            setActiveButton('yearly')
        }
    }

    const prices = activeButton === 'yearly' ? [3.99, 19.99, 59.99] : [4.99, 25.99, 79.99]


    return <div className={s.wrapper}>
        <h2 className={s.h2}>Choose The Best Plan For You</h2>
        <p className={s.p}>No credit card required and 5 days free trial. Manage your crypto portfolio with CoinTrack.ai with unlimited opportunities.</p>
        <div className={s.buttons}>
            <div data-name='monthly' className={`${s.button} ${activeButton === 'monthly' ? s.activeButton : ''}`} onClick={handlePriceSelectionChange}>monthly</div>
            <div data-name='yearly' className={`${s.button} ${activeButton === 'yearly' ? s.activeButton : ''}`} onClick={handlePriceSelectionChange}>yearly<span>save 34%</span></div>
        </div>
        <div className={s.cards}>
            <div className={s.card}>
                <img src={starter} alt="logo" />
                <h3>Starter</h3>
                <p className={s.price}><span className={s.dollarSign}>$</span><span>{prices[0]}</span> monthly</p>
            </div>
            <div className={s.card}>
                <img src={pro} alt="logo" />
                <h3>Pro</h3>
                <p className={s.price}><span className={s.dollarSign}>$</span><span>{prices[1]}</span> monthly</p>
            </div>
            <div className={s.card}>
                <img src={max} alt="logo" />
                <h3>Max</h3>
                <p className={s.price}><span className={s.dollarSign}>$</span><span>{prices[2]}</span> monthly</p>
            </div>
            <div className={s.card}>
                <img src={teams} alt="logo" />
                <h3>Team</h3>
            </div>
        </div>
    </div>
}

export default Subscription