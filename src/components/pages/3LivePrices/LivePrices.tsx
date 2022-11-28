import { useAppSelector } from '../../../redux/hooks';
import s from './LivePrices.module.css'
import { marketsCoins } from '../../../types'
import Charts from './Charts/Charts';

const LivePrices = () => {


    const marketsData: marketsCoins[] = useAppSelector(state => state.marketsReducer.markets)


    return <div className={s.wrapper}>
        <h2 className={s.h2} >See live cryptocurrency prices</h2>
        <table className={s.table}>
            <tr className={s.tHeader}>
                <th>Name</th>
                <th>Price</th>
                <th>1 Hour Change</th>
                <th>Market Cap</th>
                <th>Price Graph (7D)</th>
                <th>btn</th>
            </tr>
                {marketsData.map(coin => <tr className={s.mappedTr}>
                    <td><img width='22px' src={coin.image} alt='coin logo' />{coin.name}</td>
                    <td>{coin.current_price.toFixed(2)}</td>
                    <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>{coin.market_cap.toFixed(2)}</td>
                    <td>{<Charts sparkline={coin.sparkline_in_7d.price} />}</td>
                    <td>...</td>
                </tr>)}
        </table>
    </div>
}
 
export default LivePrices;