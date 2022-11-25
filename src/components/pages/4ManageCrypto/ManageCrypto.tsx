import s from './ManageCrypto.module.css'
import img from '../../../images/page4/circle_thing.png'
import Button from '../../reusable/Button/Button';

const ManageCrypto = () => {
    return <div className={s.wrapper}>
        <h2 className={s.h2}>Manage your crypto assets across multiple exchanges and wallets</h2>
        <div className={s.subWrap}>
            <div className={s.leftSide}>
                <p>Security and Data privacy</p>
                <p className={s.midLeftText}>Real-time market data and portfolio updates</p>
                <p>Customized charts, graphs and data tools</p>
            </div>
            <img className={s.img} src={img} alt='circle thing has not loaded' />
            <div className={s.rightSide}>
                <p>AI-powered innovative platform</p>
                <p className={s.midRightText}>Get portfolio insights & performance reports</p>
                <p>Notifications and crypto price alerts</p>
            </div>
        </div>
        <div className={s.button}>
            <Button>Start Tracking</Button>
        </div>
    </div>
}
 
export default ManageCrypto;