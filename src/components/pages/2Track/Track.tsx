import s from './Track.module.css'
import icon from '../../../images/page2/icon.png'
import icon5 from '../../../images/page2/icon5.png'
import icon2 from '../../../images/page2/icon2.png'
import icon3 from '../../../images/page2/icon3.png'
import icon4 from '../../../images/page2/icon4.png'
import Button from '../../reusable/Button/Button'
import G1 from '../../../images/page2/G1.png'
import G2 from '../../../images/page2/G2.png'
import BigG from '../../../images/page2/BigG.png'

const Track = () => {
    return <div className={s.wrapper}>
        <h2 className={s.header}>Track all your crypto accounts in one place — automatically</h2>

        <div className={s.test}>

        <div className={s.items}>
                <p><img src={icon} alt="icon" />Crypto portfolio tracking</p>
                <p><img src={icon2} alt="icon" />24h cryptocurrency market report</p>
                <p><img src={icon3} alt="icon" />Crypto price alerts</p>
                <p><img src={icon4} alt="icon" />Safety and Security</p>
                <p><img src={icon5} alt="icon" />Push notifications</p>
                <Button>Start Tracking</Button>
            </div>

            <div className={s.pics}>
                <div className={s.picGroup}>
                    <img src={G1} alt="bi" />
                    <img src={G2} alt="tc" />
                </div>
                <img src={BigG} alt="oin" />
            </div>
        </div>


    </div>
}
 
export default Track;