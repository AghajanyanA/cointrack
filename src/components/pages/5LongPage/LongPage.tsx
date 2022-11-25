import s from './LongPage.module.css'
import robot from '../../../images/page5/robot.png'
import Button from '../../reusable/Button/Button';

const LongPage = () => {
    return <div className={s.wrapper}>
        <div className={s.poweredBy}>
            <div className={s.PBtext}>
                <h3 className={s.h3PB}>Powered by AI</h3>
                <div className={s.paragraphText}>
                    <p className={s.pPB1}>AI has been in the DNA of our company from the very beginning. As cryptocurrencies are based on blockchain technology, AI can work in tandem with blockchain to solve many of the problems. </p>
                    <p className={s.pPB2}>We use artificial intelligence algorithms to predict price trends on popular crypto markets. It is compatible with various cryptocurrency exchanges.</p>
                </div>
                <Button>Join Us</Button>
            </div>
            <img className={s.robotIMG} src={robot} alt="" />
        </div>

    </div>
}
 
export default LongPage;