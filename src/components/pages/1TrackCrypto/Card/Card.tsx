import { marketsCoins } from '../../../../types'
import s from './Card.module.css'

type CardProps = {
    loading: boolean
    error: string
    item: marketsCoins
}

const Card = ({loading, error, item}:CardProps) => {

    const {name, current_price, price_change_24h, price_change_percentage_24h, image} = item

    
    return <div className={s.wrap} >
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className={s.subWrap}>
            <div className={s.icon} >
                <img src={image} alt="icon"  />
            </div>
            <div className={s.dataWrap}>
                <div className={s.subDataWrap}>
                    <p className={s.name}>{name}</p>
                    <p className={s.current_price}>${current_price.toFixed(2)}</p>
                    <p className={`${s.price_change_24h } ${price_change_24h >= 0 ? s.green : s.red}`}>${price_change_24h.toFixed(2)}</p>
                </div>
                <div className={s.rightSide} >
                    <p className={`${s.price_change_percentage_24h} ${price_change_percentage_24h >= 0 ? s.green : s.red}`}>{price_change_percentage_24h >= 0 && '+'}{price_change_percentage_24h.toFixed(2)}%</p>
                    <p className={s.l24}>last 24h</p>
                </div>
            </div>
        </div>
        <div>
            chart
        </div>
    </div>
}
 
export default Card;