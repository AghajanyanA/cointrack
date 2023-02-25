import { useAppSelector } from '../../../redux/hooks';
import s from './LivePrices.module.css'
import { marketsCoins } from '../../../types'
import Charts from './Charts/Charts';
import Button from '../../reusable/Button/Button';

const LivePrices = () => {


    const fullData: marketsCoins[] = useAppSelector(state => state.marketsReducer.markets)
    const marketsData: marketsCoins[] = []

    for (let i = 0; i < 7; i++) {
        if(fullData.length) {
            marketsData.push(fullData[i])
        }
    }

    return <div className={s.wrapper}>
        <h2 className={s.h2}>See live cryptocurrency prices</h2>
        <div className={s.table}>
            <div className={`${s.tableHeader} ${s.tablePositioning}`}>
                <p>Name</p>
                <p>Price</p>
                <p>1 Hour Change</p>
                <p>Market Cap</p>
                <p>Price Graph (7D)</p>
            </div>
            <div className={s.tableBody}>
                {!marketsData.length ? <div className={s.loading}>Loading</div> : null}
                {marketsData.map(coin => <div key={coin.id} className={s.mappedTr}>
                    <p><img width='22px' src={coin.image} alt='coin logo' className={s.logo} />{coin.name}</p>
                    <p>{coin.current_price.toFixed(2)}</p>
                    <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <p>{coin.market_cap.toFixed()}</p>
                    <p>{<Charts sparkline={coin.sparkline_in_7d.price} />}</p>
                </div>)}
            </div>
        </div>
        <div className={s.button}><Button>Load more</Button></div>
    </div>
}
 
export default LivePrices;