import Reviews from './Reviews/Reviews';
import s from './TrustUs.module.css'
import asian from '../../../images/page6/asian.png'
import beard from '../../../images/page6/beard.png'
import davis from '../../../images/page6/davis.png'
import Button from '../../reusable/Button/Button';

const TrustUs = () => {
    return <div className={s.wrapper}>
        <h2 className={s.title}>People Trust Us</h2>
        <div className={s.reviews}>
            <Reviews img={asian} name={'Paul Lee'} text={'CoinTrack.ai is an all in one solution for me as it has all the features I need. It has been 5 months since I am using it and I can claim that the platform is really user-friendly with multiple powerful tools. It allows me to connect my different wallets and exchange accounts in one place to track and analyze crypto I have and this makes my life easier.'} />
            <Reviews img={beard} name={'Ishan Bansal'} text={'Even if you are not a crypto professional you can set up your account in CoinTrack.ai in just a few minutes. It offers different pricing plans based on personal preferences so that you can customize the platform for your needs. Moreover, it has a 5 day trial to try and choose the best plan for you. The ability to see all my transactions and get portfolio performance updates is a really great solution. CoinTrack.ai saves me time and helps me to have a better crypto experience.'} />
            <Reviews img={davis} name={'Matthew Davis'} text={'CoinTrack.ai supports the majority of cryptocurrency and it is integrated with all the exchanges I’m using. It is the best for traders focused on deep portfolio analytics and detailed reports by an hour, day, week, month etc. The thing I love most is its feature to track also my futures so that I can save my time and control all my crypto in one place with absolute security.'} />
        </div>
        <div className={s.button}>
            <Button>Get Started</Button>
        </div>
    </div>
}
 
export default TrustUs;