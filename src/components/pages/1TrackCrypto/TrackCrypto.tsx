import s from './TrackCrypto.module.css'
import building from '../../../images/building.png'
import Button from '../../reusable/Button/Button';
import Card from './Card/Card';
import { useAppSelector } from '../../../redux/hooks';
import { marketsCoins } from '../../../types';


const TrackCrypto = () => {

    const { markets, loading, errorMessage } = useAppSelector(state => state.marketsReducer);

    
        const coins: marketsCoins[] = [];
            for(let i = 0; i < 4; i++) {
                coins.push(markets[i]);
            }
        
        
    return <div className={s.wrap}>
        <div className={s.body} >
            <div className={s.subBody}>
                <h1 className={s.h1}>Track your cryptocurrency assets from one place</h1>
                
                <h3 className={s.h3}>Cointrack.ai is a simple and secure crypto portfolio tracker which manages your DeFi assets</h3>
                
                <div className={s.button}>
                    <Button>Start Tracking</Button>
                </div> 
            </div>
                
            <div className={s.building}>
                <img src={building} alt="building" />
            </div>
        </div>
        
        <div className={s.cardWarpper}>
                {coins[coins.length - 1] != undefined &&
                coins.map(item => <Card item={item} loading={loading} error={errorMessage} key={item?.id} />)}
        </div>
    </div>;
};
 
export default TrackCrypto;