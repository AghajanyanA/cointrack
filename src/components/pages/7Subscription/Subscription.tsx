import s from './Subscription.module.css'
import starter from '../../../images/page7/starter.png'
import pro from '../../../images/page7/pro.png'
import max from '../../../images/page7/max.png'
import teams from '../../../images/page7/teams.png'
import { useState } from 'react'
import checks from '../../../images/page7/doubleCheck.png'
import Button from '../../reusable/Button/Button'
import label from '../../../images/page7/label.png'

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
            <div className={s.cardWrapper}>
                <div className={s.card}>
                    <img src={starter} alt="logo" />
                    <h3>Starter</h3>
                    <p className={s.price}><span className={s.dollarSign}>$</span><span>{prices[0]}</span> monthly</p>
                    <div className={s.points}>
                        <div><img src={checks} alt="checks" /><p><span className={s.blue}>5</span> exchange connections</p></div>
                        <div><img src={checks} alt="checks" /><p><span className={s.blue}>5</span> wallet connections</p></div>
                        <div><img src={checks} alt="checks" /><p>Up to <span className={s.blue}>1000</span> transactions</p></div>
                        <div><img src={checks} alt="checks" /><p>Portfolio update - <span className={s.blue}>Daily</span></p></div>
                    </div>
                </div>
                <div className={s.subscribeButton}><Button>Start 5 day trial</Button></div>
            </div>
            <div className={s.cardWrapper2}>
                    <div className={s.label}>
                        <img src={label} alt="label" />
                        <p>best value</p>
                    </div>
                    <div className={s.cardSubWrapper}>
                        <div className={s.card}>
                            <img src={pro} alt="logo" />
                            <h3>Pro</h3>
                            <p className={s.price}><span className={s.dollarSign}>$</span><span>{prices[1]}</span> monthly</p>
                            <div className={s.points}>
                                <div><img src={checks} alt="checks" /><p><span className={s.darkBlue}>Unlimited</span> exchange connections</p></div>
                                <div><img src={checks} alt="checks" /><p><span className={s.darkBlue}>Unlimited</span> wallet connections</p></div>
                                <div><img src={checks} alt="checks" /><p>Up to <span className={s.darkBlue}>5000</span> transactions</p></div>
                                <div><img src={checks} alt="checks" /><p>Portfolio updates - <span className={s.darkBlue}>Daily, Weekly</span></p></div>
                                <div><img src={checks} alt="checks" /><p><span className={s.darkBlue}>Personal</span> account manager</p></div>
                                <div><img src={checks} alt="checks" /><p><span className={s.darkBlue}>5 alert</span> combinations</p></div>
                            </div>
                        </div>
                        <div className={s.subscribeButton}><Button>Start 5 day trial</Button></div>
                    </div>
            </div>
            <div className={s.cardWrapper}>
                <div className={s.card}>
                    <img src={max} alt="logo" />
                    <h3>Max</h3>
                    <p className={s.price}><span className={s.dollarSign}>$</span><span>{prices[2]}</span> monthly</p>
                    <div className={s.points}>
                        <div><img src={checks} alt="checks" /><p><span className={s.blue}>Unlimited</span> exchange connections</p></div>
                        <div><img src={checks} alt="checks" /><p><span className={s.blue}>Unlimited</span> wallet connections</p></div>
                        <div><img src={checks} alt="checks" /><p>Up to <span className={s.blue}>5000</span> transactions</p></div>
                        <div><img src={checks} alt="checks" /><p>Portfolio updates - <span className={s.blue}>Daily, Weekly</span></p></div>
                        <div><img src={checks} alt="checks" /><p><span className={s.blue}>Personal</span> account manager</p></div>
                        <div><img src={checks} alt="checks" /><p><span className={s.blue}>5 alert</span> combinations</p></div>
                    </div>
                </div>
                <div className={s.subscribeButton}><Button>Start 5 day trial</Button></div>
            </div>
            <div className={s.cardWrapper}>
                <div className={s.card}>
                    <img src={teams} alt="logo" />
                    <h3>Team</h3>
                    <div className={s.teamsText}>
                        <p>If you are a community over <span className={s.blue}>15 members</span> you can join our special offer</p>
                    </div>
                </div>
                <div className={s.subscribeButton}><Button>Start 5 day trial</Button></div>
            </div>
        </div>
    </div>
}

export default Subscription