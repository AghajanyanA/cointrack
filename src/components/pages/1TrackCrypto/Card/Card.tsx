import { ResponsiveContainer, AreaChart, Area, YAxis, XAxis } from 'recharts'
import { marketsCoins } from '../../../../types'
import s from './Card.module.css'

type CardProps = {
    loading: boolean
    error: string
    item: marketsCoins
}
type ChartData = {
    date: string
    price: number
}


const Card = ({loading, error, item}:CardProps) => {

    const {name, current_price, price_change_24h, price_change_percentage_24h, image, sparkline_in_7d} = item

    const chartData: ChartData[] = sparkline_in_7d.price.map(price => ({
        date: new Date().toString(),
        price
    }))

    const hasRisen = sparkline_in_7d.price[0] < sparkline_in_7d.price[sparkline_in_7d.price.length - 1] 
    
    return <div className={s.wrap} >
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className={s.subWrap}>
            <div className={s.icon} >
                <img src={image} alt="icon"  />
            </div>
            <div className={s.dataWrap}>
                    <p className={s.name}>{name}</p>
                    <p className={s.current_price}>${current_price.toFixed(2)}</p>
                    <p className={`${s.price_change_24h } ${price_change_24h >= 0 ? s.green : s.red}`}>${price_change_24h.toFixed(2)}</p>
            </div>
            
            <div className={s.rightSide} >
                <p className={`${s.price_change_percentage_24h} ${price_change_percentage_24h >= 0 ? s.green : s.red}`}>
                    {price_change_percentage_24h >= 0 && '+'}{price_change_percentage_24h.toFixed(2)}%</p>
                <p className={s.l24}>last 24h</p>
            </div>
        </div>
        <div className={s.chart}>
            <ResponsiveContainer>
                <AreaChart
                data={chartData}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >
                    <defs>
                        <linearGradient id="chartUp" x1="0" y1="0" x2="0" y2="1" >
                            <stop offset="0%" stopColor="#fb00e262" />
                            <stop offset="100%" stopColor="#fb00e21f"  /> 
                        </linearGradient>
                        <linearGradient id="chartDown" x1="0" y1="0" x2="0" y2="1" >
                            <stop offset="0%" stopColor="#ff000094" />
                            <stop offset="100%" stopColor="#ff000038"  /> 
                        </linearGradient>
                    </defs>
                    <YAxis 
                        hide={true}
                        domain={['dataMin', 'dataMax']}
                    />
                    <XAxis 
                        dataKey="date"
                        hide={true}
                    />
                    <Area type="monotone" dataKey="price" stroke={hasRisen ? '#fb00e21f' : 'red'}
                        fill={hasRisen
                        ? "url(#chartUp)" : 'url(#chartDown)'} radius={25} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
}
 
export default Card;