import Button from '../../reusable/Button/Button'
import s from './Contacts.module.css'
import contact from '../../../images/page8/contact.png'

const Contacts = () => {

    return <div className={s.wrapper}>
        <div className={s.subWrapper}>
            <div className={s.texts}>
                <h3>Get in Touch With Us 24/7</h3>
                <p>We value the time of our customers and do our best to respond as fast as possible.</p>
                <Button>Get Started</Button>
            </div>
            <div><img src={contact} alt="contact place image" /></div>
        </div>
        <div className={s.email}>
            <h4>Level Up Your Crypto Experience With CoinTrack.ai</h4>
            <input type="email" placeholder='Your e-mail' />
            <Button>Get Started</Button>
        </div>
    </div>
}

export default Contacts