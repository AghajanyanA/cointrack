import s from './TrackCrypto.module.css'
import building from '../../../images/building.png'
import Button from '../../reusable/Button/Button';
import Card from './Card/Card';

const TrackCrypto = () => {
    return <div className={s.wrap}>
        <h1 className={s.h1}>Track your cryptocurrency assets from one place</h1>
        <h3 className={s.h3}>Cointrack.ai is a simple and secure crypto portfolio tracker which manages your DeFi assets</h3>
        <div className={s.button}>
            <Button>Start Tracking</Button>
        </div> 
        <img className={s.building} src={building} alt="building" />
        <div className={s.cardWarpper}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div> 
}
 
export default TrackCrypto;